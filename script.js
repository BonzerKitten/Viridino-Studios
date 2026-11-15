// Mobile menu: opens a panel over the top of the page, closes on a link tap,
// the close button, Escape, or when the window grows to the desktop layout.
(function () {
  "use strict";

  const openButton = document.querySelector(".menu-button");
  const menu = document.getElementById("menu");
  if (!openButton || !menu) return;

  const closeButton = menu.querySelector(".menu-close");
  const desktop = window.matchMedia("(min-width: 900px)");

  function openMenu() {
    menu.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  }

  function closeMenu(returnFocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    openButton.setAttribute("aria-expanded", "false");
    if (returnFocus) openButton.focus();
  }

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", function () {
    closeMenu(true);
  });

  // Tapping a link closes the menu; the browser then scrolls to the section.
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu(true);
  });

  desktop.addEventListener("change", function (event) {
    if (event.matches) closeMenu(false);
  });
})();
