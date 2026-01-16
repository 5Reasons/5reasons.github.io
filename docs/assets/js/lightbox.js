(function () {
  "use strict";

  function ensureOverlay() {
    var overlay = document.getElementById("local-lightbox");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "local-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image preview");
    overlay.style.display = "none";

    var backdrop = document.createElement("div");
    backdrop.className = "local-lightbox__backdrop";

    var content = document.createElement("div");
    content.className = "local-lightbox__content";

    var img = document.createElement("img");
    img.className = "local-lightbox__img";
    img.alt = "";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "local-lightbox__close";
    close.textContent = "Close";

    function hide() {
      overlay.style.display = "none";
      img.removeAttribute("src");
      img.alt = "";
      document.body.classList.remove("local-lightbox-open");
    }

    close.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay.style.display !== "none") hide();
    });

    content.appendChild(close);
    content.appendChild(img);
    overlay.appendChild(backdrop);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    overlay._localLightboxShow = function (src, alt) {
      img.src = src;
      img.alt = alt || "";
      overlay.style.display = "block";
      document.body.classList.add("local-lightbox-open");
      close.focus();
    };

    return overlay;
  }

  function initLightbox() {
    var overlay = ensureOverlay();

    var targets = document.querySelectorAll("img.glightbox");
    targets.forEach(function (img) {
      if (img.dataset.localLightboxBound === "1") return;
      img.dataset.localLightboxBound = "1";

      img.tabIndex = 0;
      img.addEventListener("click", function () {
        overlay._localLightboxShow(img.currentSrc || img.src, img.alt);
      });
      img.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          overlay._localLightboxShow(img.currentSrc || img.src, img.alt);
        }
      });
    });
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initLightbox);
  } else {
    document.addEventListener("DOMContentLoaded", initLightbox);
  }
})();
