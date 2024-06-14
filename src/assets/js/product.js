// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
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
const menuResponse = document.getElementById("navbar");
menuResponBtn.addEventListener("click", () => {
  menuResponse.classList.toggle("menu-response-active");
})

document.addEventListener('click', (event) => {
  if (!menuResponse.contains(event.target) && !menuResponBtn.contains(event.target)) {
    menuResponse.classList.remove('menu-response-active');
  }
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
//////////////////////////////////////////////////
const retwitteBtn = document.getElementById("retwitteBtn");
const boxSubmitRetwitte = document.querySelector(".boxSubmitRetwitte");

retwitteBtn.addEventListener("click", () => {
  boxSubmitRetwitte.classList.toggle("active-box-Submit-Retwitte");
})