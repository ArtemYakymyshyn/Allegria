"use strict";

var eyeColor = 'Green / Зелений';
console.log(eyeColor);
var burgerMenu = document.querySelector('.header__wrk__row__burgerwrapper');
var burgerContent = document.querySelector('.header-categoriesAndLangComb');
burgerMenu.addEventListener('click', function (e) {
  burgerMenu.classList.toggle('header__wrk__row__burgerwrapper__activi');
  burgerContent.classList.toggle('header-categoriesAndLangComb__activi');
});
var favouriteButton = document.querySelector('.header__row__fav');
favouriteButton.addEventListener('click', function (e) {
  favouriteButton.setAttribute('srcset', 'img/logos/favred.webp');
  favouriteButton.setAttribute('src', 'img/logos/favred.webp');
});