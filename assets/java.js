// navbar-burger
const burger = document.querySelector(".menu-burger");
const navMenu = document.querySelector('.menu-bar');

burger.addEventListener('click', () => {
    burger.classList.toggle('aktif');
    navMenu.classList.toggle('aktif');
})

document.querySelectorAll('.menu-bar li a').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('aktif');
    navMenu.classList.remove('aktif');

}))

// nav 

var navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 40) {
        navBar.classList.add('scroll')
    } else {
        navBar.classList.remove('scroll')
    }

})

