import './style.css'


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navTrigger = document.querySelector('.nav-trigger');
const scrollToTop = document.querySelector('.js-scroll-to-top');

document.addEventListener('scroll', event => {

    if(scrollY >= 400) {
        scrollToTop.setAttribute('active', '');
    } else if(scrollY >= 100) {
        header.setAttribute('scrolled', '');
    } else {
        header.removeAttribute('scrolled');
        scrollToTop.removeAttribute('active');
    }
})

scrollToTop.addEventListener('click', event => {
    window.scrollTo(0,0)
})

navTrigger.addEventListener('click', event => {
    nav.toggleAttribute('opened');
    if(nav.hasAttribute('opened')) {
        navTrigger.setAttribute('src', '/assets/icons/close.svg');
    } else {
        navTrigger.setAttribute('src', '/assets/icons/menu.svg');
    }
})