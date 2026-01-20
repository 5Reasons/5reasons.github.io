(() => {
  const prefersReducedMotion = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const getScrollDurationMs = () => {
    const configured = window.__brSmoothScrollDurationMs;
    if (typeof configured === "number" && Number.isFinite(configured) && configured >= 0) {
      return configured;
    }
    return 900; // default: slower than browser-native smooth
  };

  const headerOffsetPx = () => {
    const header = document.querySelector(".md-header");
    const height = header?.getBoundingClientRect?.().height;
    return (typeof height === "number" && Number.isFinite(height) ? height : 0) + 12;
  };

  let activeAnimationFrame = null;
  const cancelActiveScroll = () => {
    if (activeAnimationFrame != null) {
      cancelAnimationFrame(activeAnimationFrame);
      activeAnimationFrame = null;
    }
  };

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const animateScrollTo = (targetTop) => {
    cancelActiveScroll();

    if (prefersReducedMotion()) {
      window.scrollTo({ top: targetTop, behavior: "auto" });
      return;
    }

    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    if (Math.abs(distance) < 2) return;

    const durationMs = getScrollDurationMs();
    if (durationMs <= 0) {
      window.scrollTo({ top: targetTop, behavior: "auto" });
      return;
    }

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, startTop + distance * eased);

      if (t < 1) {
        activeAnimationFrame = requestAnimationFrame(step);
      } else {
        activeAnimationFrame = null;
      }
    };

    activeAnimationFrame = requestAnimationFrame(step);
  };

  const scrollToHash = (hash, mode = "animate") => {
    if (!hash) return false;

    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!id) return false;

    const target = document.getElementById(id);
    if (!target) return false;

    const top = window.scrollY + target.getBoundingClientRect().top - headerOffsetPx();

    const targetTop = Math.max(0, top);
    if (mode === "auto") {
      cancelActiveScroll();
      window.scrollTo({ top: targetTop, behavior: "auto" });
    } else {
      animateScrollTo(targetTop);
    }
    return true;
  };

  // Global delegated click handler (registered once).
  const onClick = (event) => {
    const link = event.target?.closest?.("a[href]");
    if (!link) return;

    // Let users open in new tab etc.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const rawHref = link.getAttribute("href") || "";
    if (!rawHref.includes("#")) return;

    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch {
      return;
    }

    // Only handle same-page anchors.
    if (url.origin !== window.location.origin) return;
    if (url.pathname !== window.location.pathname) return;
    if (!url.hash) return;

    // If we can scroll to it, prevent default and animate.
    const didScroll = scrollToHash(url.hash, "animate");
    if (!didScroll) return;

    event.preventDefault();
    history.pushState(null, "", url.hash);
  };

  const initOnce = () => {
    if (window.__brWizardSmoothScrollInit) return;
    window.__brWizardSmoothScrollInit = true;

    document.addEventListener("click", onClick);

    // Cancel if user takes over (wheel/touch/keyboard scroll).
    window.addEventListener("wheel", cancelActiveScroll, { passive: true });
    window.addEventListener("touchstart", cancelActiveScroll, { passive: true });
    window.addEventListener("keydown", cancelActiveScroll);

    window.addEventListener("hashchange", () => {
      // Best-effort: user might change hash manually.
      scrollToHash(window.location.hash, "animate");
    });
  };

  const onPageRender = () => {
    // When entering a page with a hash, Material may jump instantly.
    // We can't always prevent the initial jump, but we can still align with header offset.
    if (!window.location.hash) return;
    // Prefer non-animated alignment on initial render to avoid double-scroll.
    setTimeout(() => scrollToHash(window.location.hash, "auto"), 60);
  };

  initOnce();

  // Classic full page load.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onPageRender);
  } else {
    onPageRender();
  }

  // MkDocs Material instant navigation support.
  // If Material exposes the observable, re-run after each page swap.
  if (window.document$?.subscribe) {
    window.document$.subscribe(onPageRender);
  }
})();
