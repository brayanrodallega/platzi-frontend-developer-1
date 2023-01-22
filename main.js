//* All
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


//* Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//* Mobile
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}