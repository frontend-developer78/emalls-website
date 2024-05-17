// ------------- Start Js function

let body = document.getElementById("themBody");
let moonBox = document.querySelector(".moon-box");
let sunBox = document.querySelector(".sun-box");
let userAcountBtn = document.querySelector(".user-profile-btn");
let userAcountBox = document.querySelector("[data-acount='open']");
let userAcountBoxDefault = document.querySelector("[data-acount-default='open']");
let Advertising = document.querySelector(".Advertising");
let advertisingBox = document.querySelector(".Advertising-box2");
const menuBtnResponsive = document.querySelector(".menu-btn-responsive");
let navMenuResponsive = document.querySelector("nav");
function profileAcount() {
  userAcountBox.classList.toggle("active-user-acount-box");
}
function profileAcountDefault() {
  userAcountBoxDefault.classList.toggle("active-user-acount-box");
}

function themBox() {
    body.classList.toggle("dark-them-active");
    moonBox.classList.toggle("active-moon-box");
    sunBox.classList.toggle("not-active-sun-box");
}


function deleteBtn() {
  Advertising.classList.add("active-delete-btn");
  advertisingBox.classList.add("active-delete-btn");
}
function deleteBtnAdver() {
  advertisingBox.classList.add("active-delete-btn");
}


menuBtnResponsive.addEventListener("click", () => {
  navMenuResponsive.classList.toggle("active-responsive-menu");
});


let navbar = document.querySelector(".navbar-sticky");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if(scroll >= 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
})
///////////////////////////////////////////////////
const navLinkDropdown = document.querySelector(".nav-link-dropdown");
const dropdownMenuCustom = document.querySelector(".dropdown-menu-custom");
navLinkDropdown.addEventListener("click", () => {
    dropdownMenuCustom.classList.toggle("dropdown-menu-active");
})