/* Consent banner + GA4 gating (first-party, minimal).
   Stores consent in localStorage: br_consent_v1 = { analytics: true|false, ts: ISO } */

(function () {
  "use strict";

  var STORAGE_KEY = "br_consent_v1";
  var GA_MEASUREMENT_ID = "G-JD5Y68LTWF";

  function safeParse(jsonText) {
    try {
      return JSON.parse(jsonText);
    } catch (_e) {
      return null;
    }
  }

  function getConsent() {
    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    var parsed = safeParse(raw);
    if (!parsed || typeof parsed.analytics !== "boolean") return null;
    return parsed;
  }

  function setConsent(analyticsGranted) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ analytics: !!analyticsGranted, ts: new Date().toISOString() })
    );
  }

  function loadGA4() {
    if (window.__br_ga_loaded) return;
    window.__br_ga_loaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }

  function createBanner(infoOnly) {
    var banner = document.createElement("div");
    banner.className = "br-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");

    if (infoOnly) {
      banner.innerHTML =
        "<div class=\"br-consent__inner\">" +
          "<div class=\"br-consent__copy\">" +
            "<strong>Privacy notice.</strong> Analytics is currently enabled for testing. " +
            "See <a href=\"/reasoners/privacy/\" style=\"font-size: 10px;\">Privacy Policy</a> and <a href=\"/reasoners/gdpr/\" style=\"font-size: 10px;\">GDPR</a>." +
          "</div>" +
          "<div class=\"br-consent__actions\">" +
            "<button class=\"md-button md-button--primary\" type=\"button\" data-br-consent=\"ok\">OK</button>" +
          "</div>" +
        "</div>";
    } else {
      banner.innerHTML =
        "<div class=\"br-consent__inner\">" +
          "<div class=\"br-consent__copy\">" +
            "<strong>Privacy notice.</strong> We use optional analytics (GA4) to improve content. " +
            "See <a href=\"/reasoners/privacy/\" style=\"font-size: 10px;\">Privacy Policy</a> and <a href=\"/reasoners/gdpr/\" style=\"font-size: 10px;\">GDPR</a>." +
          "</div>" +
          "<div class=\"br-consent__actions\">" +
            "<button class=\"md-button md-button--primary\" type=\"button\" data-br-consent=\"accept\">Accept analytics</button>" +
            "<button class=\"md-button\" type=\"button\" data-br-consent=\"reject\">Reject</button>" +
          "</div>" +
        "</div>";
    }

    banner.addEventListener("click", function (e) {
      var target = e.target;
      if (!target || !target.getAttribute) return;
      var action = target.getAttribute("data-br-consent");
      if (!action) return;

      if (action === "ok") {
        banner.remove();
        return;
      }

      if (action === "accept") {
        setConsent(true);
        loadGA4();
      } else if (action === "reject") {
        setConsent(false);
      }

      banner.remove();
    });

    return banner;
  }

  function openBanner() {
    // Allow manual reopen from console/links if needed.
    if (document.querySelector(".br-consent")) return;
    document.body.appendChild(createBanner(false));
  }

  function openInfoBanner() {
    if (document.querySelector(".br-consent")) return;
    document.body.appendChild(createBanner(true));
  }

  window.brConsentOpen = openBanner;

  document.addEventListener("DOMContentLoaded", function () {
    // If GA is already injected globally (e.g., during a testing phase),
    // show an info-only banner (analytics is already on) and don't load GA again.
    if (typeof window.gtag === "function") {
      openInfoBanner();
      return;
    }

    var consent = getConsent();
    if (consent && consent.analytics) {
      loadGA4();
      return;
    }

    if (consent && consent.analytics === false) {
      return;
    }

    openBanner();
  });
})();
