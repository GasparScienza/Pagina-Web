const header = document.querySelector('header');

//Cuando hago scroll en y le agrega una clase a mi header llamada sticky
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', this.window.scrollY > 80);
});

//Open Menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

//ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: '2500',
    reset: false
});


sr.reveal('.home-text', {delay:100});
sr.reveal('.home-img', {delay:300});
sr.reveal('.container', {delay:300});
sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay:300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', {delay:300});

sr.reveal('.reviews, .reviews-content, .contact', {delay:300});