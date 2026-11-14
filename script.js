// Footer year
var year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile menu
var toggle = document.querySelector(".menu-toggle");
var nav = document.querySelector(".nav");
if (toggle && nav) {
  var closeMenu = function () {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  };
  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
}

// Copy email button
document.querySelectorAll(".copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var text = btn.getAttribute("data-copy");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = "COPIED";
        setTimeout(function () { btn.textContent = "COPY"; }, 1800);
      }, function () {});
    }
  });
});
