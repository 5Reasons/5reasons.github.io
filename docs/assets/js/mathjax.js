// MathJax configuration for arithmatex (Zensical)
// Note: this config only takes effect if MathJax is loaded.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

function typesetMath() {
  if (!window.MathJax || !window.MathJax.typesetPromise) return;
  window.MathJax.typesetClear();
  window.MathJax.typesetPromise();
}

// Zensical exposes `document$` for instant navigation.
if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(typesetMath);
} else {
  document.addEventListener("DOMContentLoaded", typesetMath);
}
