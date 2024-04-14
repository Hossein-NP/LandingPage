const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const navMenuCloseBtn = document.querySelector(".nav-menu__top-section-closebtn");
let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav-btn--open");
        navMenu.classList.remove("nav-menu--open");
        navOpen = false;
    } else {
        navBtn.classList.add("nav-btn--open");
        navMenu.classList.add("nav-menu--open");
        navOpen = true;
    }
})
navMenuCloseBtn.addEventListener("click" , function() {
    navMenu.classList.remove("nav-menu--open");
    navBtn.classList.remove("nav-btn--open");
})