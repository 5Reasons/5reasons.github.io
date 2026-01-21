(function () {
  "use strict";

  function fixMermaidInlineLabelStyles(root) {
    try {
      var scope = root || document;
      var nodes = scope.querySelectorAll(
        ".mermaid foreignObject [style], .mermaid foreignObject > div, svg[id^='__mermaid_'] foreignObject [style], svg[id^='__mermaid_'] foreignObject > div"
      );

      nodes.forEach(function (el) {
        if (!el || !el.style) return;
        if (el.dataset && el.dataset.mermaidLabelFixed === "1") return;

        // Mirror what we want in CSS, but write it into element.style so it
        // wins even when Mermaid injects inline styles during render.
        // Minimal, non-destructive overrides: let Mermaid keep its sizing
        // (e.g., max-width: 200px) but allow wrapping.
        el.style.whiteSpace = "normal";

        if (el.dataset) el.dataset.mermaidLabelFixed = "1";
      });
    } catch (e) {
      // Non-fatal.
    }
  }

  function markMermaidLinkedLabels(root) {
    try {
      var scope = root || document;

      // Only target HTML labels inside foreignObject; SVG <a> isn't reliably
      // compatible with generated content across browsers.
      var links = scope.querySelectorAll(
        ".mermaid foreignObject a[href], svg[id^='__mermaid_'] foreignObject a[href]"
      );

      links.forEach(function (a) {
        if (!a) return;
        if (a.dataset && a.dataset.mermaidLinkMarked === "1") return;

        // Avoid double-marking if Mermaid reuses DOM fragments.
        if (a.querySelector && a.querySelector(".br-mermaid-link-marker")) {
          if (a.dataset) a.dataset.mermaidLinkMarked = "1";
          return;
        }

        var marker = document.createElement("span");
        marker.className = "br-mermaid-link-marker";
        marker.setAttribute("aria-hidden", "true");
        marker.textContent = "✦";
        a.appendChild(marker);

        if (a.dataset) a.dataset.mermaidLinkMarked = "1";
      });
    } catch (e) {
      // Non-fatal.
    }
  }

  function fixMermaidLinkUnderlines(root) {
    try {
      var scope = root || document;

      // Mermaid can inject SVG-scoped rules like:
      // `#__mermaid_0 a .nodeLabel { text-decoration: underline; }`
      // CSS overrides can lose depending on cascade; inline !important wins.
      var svgLabelEls = scope.querySelectorAll(
        "svg[id^='__mermaid_'] a .nodeLabel, svg[id^='__mermaid_'] a .nodeLabel *"
      );

      svgLabelEls.forEach(function (el) {
        if (!el || !el.style) return;
        // Avoid repeated work.
        if (el.dataset && el.dataset.mermaidUnderlineFixed === "1") return;

        if (el.style && el.style.setProperty) {
          el.style.setProperty("text-decoration", "none", "important");
          el.style.setProperty("text-decoration-line", "none", "important");
        } else {
          el.style.textDecoration = "none";
        }

        if (el.dataset) el.dataset.mermaidUnderlineFixed = "1";
      });

      // HTML labels inside foreignObject can also contain links.
      var htmlLabelEls = scope.querySelectorAll(
        ".mermaid foreignObject a[href] .nodeLabel, .mermaid foreignObject a[href] .nodeLabel *"
      );

      htmlLabelEls.forEach(function (el) {
        if (!el || !el.style) return;
        if (el.dataset && el.dataset.mermaidUnderlineFixed === "1") return;
        if (el.style && el.style.setProperty) {
          el.style.setProperty("text-decoration", "none", "important");
          el.style.setProperty("text-decoration-line", "none", "important");
        } else {
          el.style.textDecoration = "none";
        }
        if (el.dataset) el.dataset.mermaidUnderlineFixed = "1";
      });
    } catch (e) {
      // Non-fatal.
    }
  }

  function onPageRender() {
    fixMermaidInlineLabelStyles(document);
    markMermaidLinkedLabels(document);
    fixMermaidLinkUnderlines(document);

    // Mermaid rendering can happen after the page is swapped in (instant navigation)
    // so observe for newly inserted SVG/foreignObject nodes.
    if (window.__mermaidLabelObserverInstalled) return;
    window.__mermaidLabelObserverInstalled = true;

    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (!m.addedNodes || m.addedNodes.length === 0) continue;

        m.addedNodes.forEach(function (n) {
          if (!n || n.nodeType !== 1) return;
          // Fast path: only re-scan when Mermaid-related DOM appears.
          if (
            n.matches &&
            (n.matches("svg") || n.matches("foreignObject") || n.matches(".mermaid"))
          ) {
            fixMermaidInlineLabelStyles(document);
            markMermaidLinkedLabels(document);
            fixMermaidLinkUnderlines(document);
            return;
          }
          if (n.querySelector && n.querySelector(".mermaid svg, foreignObject")) {
            fixMermaidInlineLabelStyles(document);
            markMermaidLinkedLabels(document);
            fixMermaidLinkUnderlines(document);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(onPageRender);
  } else {
    document.addEventListener("DOMContentLoaded", onPageRender);
  }
})();
