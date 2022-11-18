// Grab elements
const selectElement = (selecter) => {
    const element = document.querySelector(selecter)
    if(element) return element;
    throw new error(`Something went wrong, make sure that ${selecter} exists or is typed correctly.`)

};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated')
    }
};

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');

}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup


formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', Event => {
    if(Event.key === 'Escape') searchFormContainer.classList.remove('activated');
});
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});
// Swiper

const swiper = new Swiper('.swiper',{
    slidesPerView:1,
    spaceBetween:20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView:2
        },
        1200: {
            slidesPerView:3
        }
    }
    
}
);