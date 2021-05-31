"use strict";

// onclick="openNav()"
// onclick="closeNav()"

// selected elements
const mobileMenu = document.querySelector(".mobile-menu");
const main = document.querySelector(".hero");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeButton = document.querySelector(".closebtn");
const productCard = document.querySelector(".card");

// mobile hamburger menu

function openNav() {
  mobileMenu.style.width = "110px";
  // main.style.marginRight = "250px";
}

function closeNav() {
  mobileMenu.style.width = "0px";
  mobileMenu.display = "none";
  // main.style.marginRight = "0px";
}

hamburgerIcon.addEventListener("click", function () {
  openNav();
});

closeButton.addEventListener("click", function () {
  closeNav();
});
