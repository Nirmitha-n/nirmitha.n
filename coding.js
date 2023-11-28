const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services')
    let scrollpos = window.scrollY;
    console.log(scrollpos);

    //Adds 'highlight' class to my menu items
    if(window.innerWidth >960 && scrollpos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight')
        return;
    } else if(window.innerWidth >960 && scrollpos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth >960 && scrollpos < 2345){
        serviceMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;

    } 
    if((elem && window.innerWidth < 960 && scrollpos < 600 || elem)) {
        elem.classList.remove('highlight');
    }
    
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu)

