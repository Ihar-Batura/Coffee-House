const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__navigation');
const menu = document.querySelector('.header__menu');
const burgerBtn = document.getElementById('burger');
const menuLinks = document.querySelectorAll('.navigation__link');

// Open and Close burger menu

function openBurger() {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
  menu.classList.toggle('active');
}

burgerBtn.addEventListener('click', openBurger);
menuLinks.forEach((link) => {
  link.addEventListener('click', openBurger);
});
