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

const menuResponBtn = document.getElementById("menuResponBtn");
const menuResponse = document.querySelector(".menu-response");
menuResponBtn.addEventListener("click", () => {
  menuResponse.classList.toggle("menu-response-active");
})
///////////////////////////////////////////// sign up page style
const signUpBtn = document.getElementById("signUpBtn");
const loginContent = document.querySelector(".loginContent");
const signContent = document.querySelector(".signContent");
const loginContainer = document.querySelector(".loginContainer");
const signContainer = document.querySelector(".signContainer");
const forgetLink = document.querySelector(".forget-pass-link");
const submitLogin = document.getElementById("submitLogin");
const submitSign = document.getElementById("submitSign");
const signUpbtnContainer = document.querySelector(".signUp-btn-container");
const loginBtnContainer = document.querySelector(".login-btn-container");
const loginBtn = document.getElementById("loginBtn");

signUpBtn.addEventListener("click", () => {
  loginContent.style.display = "none";
  signContent.style.display = "inline-block";
  loginContainer.style.display = "none";
  signContainer.style.display = "block";
  forgetLink.style.display = "none";
  submitLogin.style.display = "none";
  submitSign.style.display = "block";
  signUpbtnContainer.style.display = "none";
  loginBtnContainer.style.display = "block";
});

loginBtn.addEventListener("click", () => {
  loginContent.style.display = "inline-block";
  signContent.style.display = "none";
  loginContainer.style.display = "block";
  signContainer.style.display = "none";
  forgetLink.style.display = "block";
  submitLogin.style.display = "block";
  submitSign.style.display = "none";
  signUpbtnContainer.style.display = "block";
  loginBtnContainer.style.display = "none";
});
//////////////////////////////////////////////////
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if(scroll >= 50) {
    scrollBtn.style.bottom = "20px";
  } else {
    scrollBtn.style.bottom = "-70px";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
})
///////////////////////////////////////////////////////
const onlineStore = document.getElementById("onlineStore");
const oflineStore = document.getElementById("oflineStore");
const onlineStoreRegesterForm1 = document.querySelector(".online-Store-Regester-Form");
const onlineStoreRegesterForm2 = document.querySelector(".ofline-Store-Regester-Form")


onlineStore.addEventListener("click", () => {
  onlineStore.classList.add("active-online-store-btn");
  oflineStore.classList.remove("active-online-store-btn");
  onlineStoreRegesterForm1.classList.add("active-store-regester-form");
  onlineStoreRegesterForm2.classList.add("unactive-store-regester-form");
});

oflineStore.addEventListener("click", () => {
  onlineStore.classList.remove("active-online-store-btn");
  oflineStore.classList.add("active-online-store-btn");
  onlineStoreRegesterForm2.classList.remove("unactive-store-regester-form");
  onlineStoreRegesterForm2.classList.add("active-store-regester-form");
  onlineStoreRegesterForm1.classList.remove("active-store-regester-form");
});