const eyeColor = 'Green / Зелений';
console.log(eyeColor);

const burgerMenu = document.querySelector('.header__wrk__row__burgerwrapper');

const burgerContent = document.querySelector('.header-categoriesAndLangComb');

burgerMenu.addEventListener('click', (e) => {
   burgerMenu.classList.toggle('header__wrk__row__burgerwrapper__activi');
   burgerContent.classList.toggle('header-categoriesAndLangComb__activi');
});

const favouriteButton = document.querySelector('.header__row__fav');
favouriteButton.addEventListener('click', (e) => {
   favouriteButton.setAttribute('srcset', 'img/logos/favred.webp');
   favouriteButton.setAttribute('src', 'img/logos/favred.webp')
});






