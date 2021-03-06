const button = document.querySelector('.page-header__toggle');
const navToggle = document.querySelector('.page-header__nav');
const mapWrapper = document.querySelector('.contacts__map-wrapper')

button.classList.remove('page-header__toggle--hidden')
document.querySelector('.main-nav').classList.remove('main-nav--nojs');
mapWrapper.classList.remove('contacts__map-wrapper--hidden');
navToggle.classList.add('page-header__nav--hidden');

button.addEventListener('click', () => {
  if (button.classList.contains('page-header__toggle--closed')) {
    button.classList.add('page-header__toggle--opened');
    button.classList.remove('page-header__toggle--closed');
    navToggle.classList.remove('page-header__nav--hidden');
  } else {
    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__nav--hidden');
  }
});
