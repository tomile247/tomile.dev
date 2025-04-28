import './style.css'


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navTrigger = document.querySelector('.nav-trigger');
const scrollToTop = document.querySelector('.js-scroll-to-top');
const darkMode = document.querySelector('.js-dark-mode');
const lightMode = document.querySelector('.js-light-mode');

document.addEventListener('DOMContentLoaded', event => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
});

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
        navTrigger.innerHTML = `<use href="/icons.svg#close"></use>`;
    } else {
        navTrigger.innerHTML = `<use href="/icons.svg#menu"></use>`;
    }
})

darkMode.addEventListener('click', event => {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');

});

lightMode.addEventListener('click', event => {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
});