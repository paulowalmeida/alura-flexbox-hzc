const menuButton = document.querySelector('.header__menu');
const sideMenu = document.querySelector('.side-menu');

menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('side-menu--active');
});
