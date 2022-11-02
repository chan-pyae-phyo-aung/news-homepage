// Selecting DOM Elements

const navHiddenCheckbox = document.querySelector(".menu__checkbox");
const sideNav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

// Toggle Side Navigation
navHiddenCheckbox.addEventListener("change", function () {
  sideNav.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("disable-scroll");
});

// Close Side Navigation if overlay is touched
overlay.addEventListener("click", function () {
  sideNav.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("disable-scroll");
  navHiddenCheckbox.checked = false;
});
