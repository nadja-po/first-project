"use strict";

const burgerElement = document.getElementById('header_burger');
const cartElement = document.getElementById('cart');
const menuElement = document.getElementById('header_menu');
const bodyElement = document.getElementById('body');
const cartListElement = document.getElementById('cart_list');
const featuresElement = document.getElementById('button_submenu');
const submenuElement = document.getElementById('submenu');
const subElement = document.getElementById('sub_nav');
const headerListElement = document.getElementById('header_list'); 
const buttonElement = document.getElementById('button_back');
let menuIsActive = false;
let submenuIsActive = false;
const buttonRight = document.getElementById('button_right');
const buttonLeft = document.getElementById('button_left');
const carouselText = document.getElementById('carousel_text');
const carouselBox = document.getElementById('carousel_box');
const carouselElement = document.getElementById('carousel');

burgerElement.addEventListener('click', function (event) {
    burgerElement.classList.toggle('active');
    menuElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
    submenuElement.classList.toggle('active');
    if (menuIsActive === true) {
        menuElement.classList.remove('active');
        subElement.classList.remove('active');
    }
    menuIsActive = !menuIsActive;
    submenuIsActive = !submenuIsActive;
});

cartElement.addEventListener('click', function (event) {
    cartListElement.classList.toggle('active');
});

featuresElement.addEventListener('click', function (event) {
    menuElement.classList.remove('active');
    subElement.classList.toggle('active');
});

submenuElement.addEventListener('click', function (event) {
   if (submenuIsActive === false) {
        subElement.classList.toggle('active');
        menuElement.classList.remove('active');
   };
});

buttonElement.addEventListener('click', function (event) {
    menuElement.classList.toggle('active');
    subElement.classList.toggle('active');
});

let images = Array.from(carouselBox.children);
let slider = [];
images.forEach(function(item, i, images) {
    slider[i] = images[i].src; 
    item.remove();
}); 

let carouselTextObject = document.createDocumentFragment();
carouselTextObject = carouselText;

let step = 0;
let carousel = Array.from(carouselBox.children);
function carouselObject (position, location) {
    let objectDiv = document.createElement('div');
    let objectImg = document.createElement('img');
    objectImg.src = slider[position];
    objectImg.classList.add('carousel__object');
    objectDiv.classList.add('carousel__box');
    objectDiv.classList.add(location);

    if (position === 0) {
        objectDiv.appendChild(carouselTextObject);
    }
    objectDiv.appendChild(objectImg);
    carouselElement.appendChild(objectDiv);
    carousel.push(objectDiv);
}
function drawCarouselSlides() {
    carouselObject(0, 'middle');
    carouselObject(1, 'right');
    carouselObject (slider.length - 1, 'left');
}
drawCarouselSlides();

function drawCarouselSlideRight() {
    let position = step - 1;
    if (position < 0) {
        position = slider.length - 1;
    }
    carouselObject (position, 'right');
    step++;
    if (step === slider.length) {
        step = 0;
    }
};

function drawCarouselSlideLeft() {
    let position = step + 1;
    if (position === slider.length) {
        position = 0;
    }
    carouselObject(position, 'left');
    step--;
    if (step < 0) {
        step = slider.length - 1;
    }
};

function throttle (callback, limit) {
    let waiting = false;                     
    return function () {                                     
         if (!waiting) {                   
            callback.apply(this, arguments);  
            waiting = true;                   
            setTimeout(function () {          
                waiting = false;             
            }, limit);
        }
    }
}

buttonRight.addEventListener('click', throttle(function (){
    carousel.forEach(function(item, i, images) { 
        if (carousel[i].className === 'carousel__box left'){
            carousel[i].remove();
        }
    })
    carousel.forEach(function(item, i, images) {
        if (carousel[i].className === 'carousel__box middle') {
            carousel[i].className = 'carousel__box left';
        }
        else {
            carousel[i].className = 'carousel__box middle';
        }
    })
    drawCarouselSlideRight();
}, 500));

buttonLeft.addEventListener('click', throttle(function (){
    carousel.forEach(function(item, i, images) {
        if (carousel[i].className === 'carousel__box right') {
            carousel[i].remove();
        }
    })
    carousel.forEach(function(item, i, images) {
        if (carousel[i].className === 'carousel__box middle') {
            carousel[i].className = 'carousel__box right';
        }
        else {
            carousel[i].className = 'carousel__box middle';
        }
    })
    drawCarouselSlideLeft();
}, 500));

