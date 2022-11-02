// Selecting DOM Elements

const navHiddenCheckbox = document.querySelector(".menu__checkbox");
const sideNav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

// Toggle Side Navigation
navHiddenCheckbox.addEventListener("change", function () {
  sideNav.classList.toggle("hidden");
  // setTimeout(() =>, 150);
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("disable-scroll");
});
