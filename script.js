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

/* buttonRight.addEventListener('click', function (){
    moveCarouselSlides('right');
}); 
buttonLeft.addEventListener('click', function (){
    moveCarouselSlides('left');
}); */

let images = Array.from(carouselBox.children);
let slider = [];
images.forEach(function(item, i, images) {
    slider[i] = images[i].data; 
    item.remove();
}); 

let carouselTextObject = document.createDocumentFragment();
carouselTextObject = carouselText;

let step = 0;
let carousel = Array.from(carouselBox.children);
function carouselObject (position, left) {
    let objectDiv = document.createElement('div');
    let objectImg = document.createElement('object');
    objectImg.data = slider[position];
    objectImg.classList.add('carousel__object');
    objectDiv.classList.add('carousel__box');
    objectDiv.style.left = left;
    if (position === 0) {
        objectDiv.appendChild(carouselTextObject);
    }
    objectDiv.appendChild(objectImg);
    carouselElement.appendChild(objectDiv);
    carousel.push(objectDiv);
}

function drawCarouselSlides() {
    carouselObject (0, "0%");
    carouselObject (1, "100%");
    carouselObject (slider.length - 1, "-100%");
};
drawCarouselSlides();

function drawCarouselSlideRight() {
    let position = step - 1;
    if (position < 0) {
        position = slider.length - 1;
    }
    carouselObject (position, "100%");
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
    carouselObject(position, "-100%");
    step--;
    if (step < 0) {
        step = slider.length - 1;
    }
};
function changesButtonsStatusDisable(disable) {
    if (disable === true) {
        buttonRight.disabled = true;
        buttonLeft.disabled = true;
    }
    else {
        buttonRight.disabled = false;
        buttonLeft.disabled = false;
    }
}
buttonRight.addEventListener('click', function (){
    changesButtonsStatusDisable(true);
    carousel.forEach(function(item, i, images) { 
        if (carousel[i].style.left === "-100%") {
            carousel[i].remove();
        }
    })
    carousel.forEach(function(item, i, images) {
        if (carousel[i].style.left === "0%") {
            carousel[i].style.left = "-100%";
        }
        else {
            carousel[i].style.left = "0%";
        }
    })
    setTimeout(function() {
        drawCarouselSlideRight(); 
        changesButtonsStatusDisable(false);
    }, 500);
})
buttonLeft.addEventListener('click', function (){
    changesButtonsStatusDisable(true);
    carousel.forEach(function(item, i, images) {
        if (carousel[i].style.left === "100%") {
            carousel[i].remove();
        }
    })
    carousel.forEach(function(item, i, images) {
        if (carousel[i].style.left === "0%") {
            carousel[i].style.left = "100%";
        }
        else {
            carousel[i].style.left = "0%";
        }
    })
    setTimeout(function() {
        drawCarouselSlideLeft();
        changesButtonsStatusDisable(false);
    }, 500);
})

