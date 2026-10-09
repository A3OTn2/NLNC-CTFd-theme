(function () {
  "use strict";
  var button = document.querySelector(".nlnc-menu-button");
  var nav = document.querySelector(".nlnc-nav");
  if (button && nav) {
    button.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("span").textContent = open ? "×" : "+";
    });
  }
})();
