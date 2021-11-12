// Open Bars 
let bar = document.querySelector('.fa-bars');
let list = document.querySelector('.list');

bar.onclick = function () {
    list.classList.toggle('open');
}

// Onscroll nav
let nav = document.querySelector('nav');

window.onscroll = function () {
    if (window.scrollY > 0) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
}

// Sliders
let sliders = Array.from(document.querySelectorAll('.landing .img'));
let numOfSliders = sliders.length;
let currentSlide = 1;
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.onclick = nextSlide;
prev.onclick = prevSlide;

function nextSlide() {
    currentSlide++;
    change();
}

function prevSlide() {
    currentSlide--;
    change();
}

change();

function change() {

    removeActive();

    sliders[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prev.classList.add('disable');
    } else {
        prev.classList.remove('disable');
    }

    if (currentSlide == numOfSliders) {
        next.classList.add('disable');
    } else {
        next.classList.remove('disable');
    }
}

function removeActive() {
    sliders.forEach((img) => {
        img.classList.remove('active');
    });
}
