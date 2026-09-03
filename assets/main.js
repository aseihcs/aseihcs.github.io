(function () {
  "use strict";

  var STORAGE_KEY = "cs-portfolio-lang";

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-list]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-list");
      var items = dict[key];
      if (Array.isArray(items)) {
        el.innerHTML = items.map(function (item) { return "<li>" + item + "</li>"; }).join("");
      }
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "nl") return saved;
    } catch (e) { /* ignore */ }

    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("nl") === 0 ? "nl" : "en";
  }

  function initLangToggle() {
    var toggle = document.getElementById("langToggle");
    applyLang(getInitialLang());

    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-lang");
        applyLang(current === "en" ? "nl" : "en");
      });
    }
  }

  function initMobileNav() {
    var burger = document.getElementById("navBurger");
    var menu = document.getElementById("mobileNav");
    if (!burger || !menu) return;

    burger.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initAboutReadMore() {
    var btn = document.getElementById("aboutMoreBtn");
    var panel = document.getElementById("aboutMore");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      panel.hidden = false;
      btn.hidden = true;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initMobileNav();
    initYear();
    initAboutReadMore();
  });
})();
