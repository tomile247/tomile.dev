import './style.css'


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navTrigger = document.querySelector('.nav-trigger');

document.addEventListener('scroll', event => {
    if(scrollY >= 100) {
        header.setAttribute('scrolled', '');
    } else {
        header.removeAttribute('scrolled');
    }
})

navTrigger.addEventListener('click', event => {
    nav.toggleAttribute('opened');
    if(nav.hasAttribute('opened')) {
        navTrigger.setAttribute('src', '/assets/icons/close.svg');
    } else {
        navTrigger.setAttribute('src', '/assets/icons/menu.svg');
    }
})