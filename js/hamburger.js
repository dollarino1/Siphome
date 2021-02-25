const menu = document.querySelector(".nav__menu");
const navLinks = document.querySelector(".header__items");
const links = document.querySelectorAll(".header__items li");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})