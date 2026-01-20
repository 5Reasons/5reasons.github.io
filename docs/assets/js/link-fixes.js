(function () {
  function applyLegacyRedirects() {
    const path = window.location.pathname || '';

    const redirects = {
      '/about/': '/reasoners/about/',
      '/about/team/': '/reasoners/team/',
      '/about/faq/': '/reasoners/faq/',
      '/about/terms/': '/reasoners/terms/',
    };

    const target = redirects[path];
    if (!target) return;

    const nextUrl = `${target}${window.location.search || ''}${window.location.hash || ''}`;
    if (nextUrl !== window.location.href) window.location.replace(nextUrl);
  }

  function isLikelyInternalHref(href) {
    if (!href) return false;
    if (href.startsWith('#')) return false;
    if (href.startsWith('mailto:')) return false;
    if (href.startsWith('tel:')) return false;
    if (href.startsWith('javascript:')) return false;
    if (href.includes('://')) return false; // http(s) and other schemes
    return true;
  }

  function rewriteMdToDirectoryUrl(href) {
    // Preserve query/hash
    const match = href.match(/^([^?#]+)(\?[^#]*)?(#.*)?$/);
    if (!match) return href;

    let path = match[1];
    const query = match[2] || '';
    const hash = match[3] || '';

    if (!path.endsWith('.md')) return href;

    // index.md => /
    if (path.endsWith('/index.md')) {
      path = path.slice(0, -'index.md'.length);
    } else {
      path = path.slice(0, -'.md'.length) + '/';
    }

    return `${path}${query}${hash}`;
  }

  function fixLinks() {
    const anchors = document.querySelectorAll('a[href]');
    for (const a of anchors) {
      const href = a.getAttribute('href');
      if (!isLikelyInternalHref(href)) continue;
      const rewritten = rewriteMdToDirectoryUrl(href);
      if (rewritten !== href) a.setAttribute('href', rewritten);
    }
  }

  function run() {
    applyLegacyRedirects();
    fixLinks();
  }

  if (typeof document$ !== 'undefined' && document$ && typeof document$.subscribe === 'function') {
    document$.subscribe(run);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
