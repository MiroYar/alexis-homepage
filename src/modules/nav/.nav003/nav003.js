function navMod() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const MAIN_NAV = document.querySelector('.main-nav');
    if (scrolled > 0) {
        MAIN_NAV.classList.add('main-nav_onscroll');
    } else {
        MAIN_NAV.classList.remove('main-nav_onscroll');
    }
}
/* СОБЫТИЯ */
window.addEventListener('scroll', navMod);
/* СОБЫТИЯ */
window.addEventListener('load', navMod);