const button = document.querySelector(".page-header__nav-toggle");
const navToggle = document.querySelector(".main-nav");

document.querySelector(".main-nav__list").classList.remove('main-nav--nojs');
navToggle.classList.add('main-nav--hidden');

button.addEventListener('click', () => {
  if (button.classList.contains('toggle--closed')) {
    button.classList.add('toggle--opened');
    button.classList.remove('toggle--closed');
    navToggle.classList.remove('main-nav--hidden');
  } else {
    button.classList.add('toggle--closed');
    button.classList.remove('toggle--opened');
    navToggle.classList.add('main-nav--hidden');
  }
});
