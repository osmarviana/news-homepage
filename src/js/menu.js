const menuNav = document.getElementById("menu-nav");
const menuBar = document.getElementById("menu-bar");
const menuClose = document.getElementById("menu-close");

menuBar.addEventListener("click", function () {
  menuBar.classList.add("hidden");
  menuClose.classList.add("show");
  menuNav.classList.add("show");
});

menuClose.addEventListener("click", function () {
  menuBar.classList.remove("hidden");
  menuClose.classList.remove("show");
  menuNav.classList.remove("show");
});
