(function () {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixLinks);
  } else {
    fixLinks();
  }
})();
