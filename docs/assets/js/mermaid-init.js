// Basic Mermaid init for MkDocs Material
// Keep it conservative to avoid breaking rendering.
if (window.mermaid) {
  window.mermaid.initialize({
    startOnLoad: true,
    securityLevel: "strict"
  });
}
