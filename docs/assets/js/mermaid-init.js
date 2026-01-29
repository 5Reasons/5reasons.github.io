// Mermaid init + rerender for MkDocs Material instant navigation.
// Keep it conservative: only render unrendered nodes.
(function () {
  "use strict";

  function getMermaid() {
    return window.mermaid;
  }

  function markRendered(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n && n.dataset) n.dataset.mermaidRendered = "1";
    }
  }

  function selectUnrendered(root) {
    var scope = root || document;
    var list = scope.querySelectorAll(".mermaid");
    if (!list || list.length === 0) return [];

    var out = [];
    for (var i = 0; i < list.length; i++) {
      var n = list[i];
      if (!n) continue;
      if (n.dataset && n.dataset.mermaidRendered === "1") continue;
      // If Mermaid already injected an SVG, treat it as rendered.
      if (n.querySelector && n.querySelector("svg[id^='__mermaid_'], svg")) {
        if (n.dataset) n.dataset.mermaidRendered = "1";
        continue;
      }
      out.push(n);
    }
    return out;
  }

  function renderMermaid(root) {
    try {
      var mermaid = getMermaid();
      if (!mermaid) return;

      // Ensure Mermaid is configured, but don't rely on startOnLoad
      // (instant navigation swaps DOM without full reload).
      if (typeof mermaid.initialize === "function") {
        mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });
      }

      var nodes = selectUnrendered(root);
      if (!nodes || nodes.length === 0) return;

      // Mermaid v10+
      if (typeof mermaid.run === "function") {
        mermaid.run({ nodes: nodes });
        markRendered(nodes);
        return;
      }

      // Mermaid v8/v9 fallback
      if (typeof mermaid.init === "function") {
        mermaid.init(undefined, nodes);
        markRendered(nodes);
      }
    } catch (_e) {
      // Non-fatal.
    }
  }

  function onPageRender() {
    // Render now, then once more shortly after to catch late DOM/layout.
    renderMermaid(document);
    window.setTimeout(function () {
      renderMermaid(document);
    }, 50);
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(onPageRender);
  } else {
    document.addEventListener("DOMContentLoaded", onPageRender);
  }
})();
