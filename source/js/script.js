const menuBtn = document.querySelector('.page-header__menu-btn');
const menu = document.querySelector('.page-header__user-menu');

menuBtn.classList.remove('page-header__menu-btn--nojs');
menu.classList.remove('page-header__user-menu--nojs');

const menuHandler = ({ target }) => {
  target.classList.toggle('page-header__menu-btn--open');
  target.classList.toggle('page-header__menu-btn--close');
  menu.classList.toggle('active');
};

menuBtn.addEventListener('click', menuHandler);
