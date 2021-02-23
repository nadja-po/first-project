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
const backElement = document.getElementById('button_back');
const buttonRight = document.getElementById('button_right');
const buttonLeft = document.getElementById('button_left');
const carouselText1 = document.getElementById('carousel_text1');
const carouselText2 = document.getElementById('carousel_text2');
const carouselText3 = document.getElementById('carousel_text3');
const carouselBox = document.getElementById('carousel_box');
const carouselElement = document.getElementById('carousel');

let menuIsActive = false;
let submenuIsActive = false;
let step = 0;
let carousel = Array.from(carouselBox.children);
let slider = [];
let carouselTextObject1 = document.createDocumentFragment();
carouselTextObject1 = carouselText1;
let carouselTextObject2 = document.createDocumentFragment();
carouselTextObject2 = carouselText2;
let carouselTextObject3 = document.createDocumentFragment();
carouselTextObject3 = carouselText3;

carousel.forEach(function(item) {
    slider.push(item.src); 
    item.remove();
}); 

function carouselObject (position, location) {
    let objectDiv = document.createElement('div');
    let objectImg = document.createElement('img');
    objectImg.src = slider[position];
    objectImg.classList.add('carousel__object');
    objectDiv.classList.add('carousel__box');
    objectDiv.classList.add(location);
    switch (position) {
        case 0:
            objectDiv.appendChild(carouselTextObject1);
            break;
        case 1:
            objectDiv.appendChild(carouselTextObject2);
            break;
        case 2:
            objectDiv.appendChild(carouselTextObject3);
            break;
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

function moveCarouselSlideRight(){
    carousel.forEach(function(item) { 
        if (item.classList.contains('left')){
            item.remove();
        }
    })
    carousel.forEach(function(item) {
        if (item.classList.contains('middle')) {
            item.classList.remove('middle')
            item.classList.add('left');
        }
        else {
            item.classList.remove('right')
            item.classList.add('middle');
        }
    })
    drawCarouselSlideRight();
};
moveCarouselSlideRight = throttle(moveCarouselSlideRight, 500);

function moveCarouselSlideLeft(){
    carousel.forEach(function(item) {
        if (item.classList.contains('right')) {
            item.remove();
        }
    })
    carousel.forEach(function(item) {
        if (item.classList.contains('middle')) {
            item.classList.remove('middle')
            item.classList.add('right');
        }
        else {
            item.classList.remove('left')
            item.classList.add('middle');
        }
    })
    drawCarouselSlideLeft();
};
moveCarouselSlideLeft = throttle(moveCarouselSlideLeft, 500);

function toggleMenu() {
    burgerElement.classList.toggle('active');
    menuElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
    submenuElement.classList.toggle('active');
    cartListElement.classList.remove('active');
    if (subElement.classList.contains('active')) {
        bodyElement.classList.remove('lock');
    }
    if (menuIsActive === true) {
        menuElement.classList.remove('active');
        subElement.classList.remove('active');
    }
    menuIsActive = !menuIsActive;
    submenuIsActive = !submenuIsActive;
};

function toggleCart() {
    cartListElement.classList.toggle('active');
    if (menuIsActive === true) {
        menuElement.classList.remove('active');
        subElement.classList.remove('active');
        burgerElement.classList.remove('active');
        bodyElement.classList.remove('lock');
        menuIsActive = !menuIsActive;
    }
};

function toggleSubMenuMobile() {
    menuElement.classList.remove('active');
    subElement.classList.toggle('active');
    bodyElement.classList.remove('lock');
};

function toggleSubMenuBack() {
    menuElement.classList.toggle('active');
    subElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
};

function toggleSubMenuDesctop() {
    if (submenuIsActive === false) {
         subElement.classList.toggle('active');
         menuElement.classList.remove('active');
    }
    else {
     menuElement.classList.remove('active');
     subElement.classList.toggle('active');
     bodyElement.classList.remove('lock');
    }
 };

buttonRight.addEventListener('click', moveCarouselSlideRight);
buttonLeft.addEventListener('click', moveCarouselSlideLeft);
burgerElement.addEventListener('click', toggleMenu);
cartElement.addEventListener('click', toggleCart);
featuresElement.addEventListener('click', toggleSubMenuMobile)
submenuElement.addEventListener('click', toggleSubMenuDesctop);
backElement.addEventListener('click', toggleSubMenuBack);

