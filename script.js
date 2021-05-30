"use strict";

// selected elements
const mobileMenu = document.querySelector(".mobile-menu");
const main = document.querySelector(".hero");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeButton = document.querySelector(".closebtn");
const productCard = document.querySelector(".card");

// mobile hamburger menu

function openNav() {
  mobileMenu.style.width = "250px";
  main.style.marginRight = "250px";
}

function closeNav() {
  mobileMenu.style.width = "0px";
  main.style.marginRight = "0px";
}
