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

  function onPageRender() {
    fixMermaidInlineLabelStyles(document);

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
            return;
          }
          if (n.querySelector && n.querySelector(".mermaid svg, foreignObject")) {
            fixMermaidInlineLabelStyles(document);
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
