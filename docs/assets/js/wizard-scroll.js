(() => {
  const isWizard = () => {
    try {
      return window.location.pathname.includes("/wizard/");
    } catch {
      return false;
    }
  };

  const scrollToHash = (hash, behavior = "smooth") => {
    if (!hash) return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    // Use scrollIntoView so scroll-margin-top can offset the fixed header.
    target.scrollIntoView({ behavior, block: "start" });
  };

  const onReady = () => {
    if (!isWizard()) return;

    // Smooth-scroll for in-page anchor links.
    document.addEventListener("click", (event) => {
      const link = event.target?.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      // Let users open in new tab etc.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      history.pushState(null, "", href);
      scrollToHash(href, "smooth");
    });

    // Smooth-scroll when hash changes (e.g., Mermaid click opens /wizard/#buyer).
    window.addEventListener("hashchange", () => {
      scrollToHash(window.location.hash, "smooth");
    });

    // Smooth-scroll if page loads with a hash.
    if (window.location.hash) {
      // Delay to allow layout + Mermaid rendering.
      setTimeout(() => scrollToHash(window.location.hash, "smooth"), 50);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
