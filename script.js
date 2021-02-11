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

burgerElement.addEventListener('click', function (event) {
    burgerElement.classList.toggle('active');
    menuElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
    submenuElement.classList.toggle('active');
    if (menuIsActive == true) {
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
   if (submenuIsActive == false) {
        subElement.classList.toggle('active');
        menuElement.classList.remove('active');
   };
});

buttonElement.addEventListener('click', function (event) {
    menuElement.classList.toggle('active');
    subElement.classList.toggle('active');
});

buttonRight.addEventListener('click', function (){
    move('right');
}); 
buttonLeft.addEventListener('click', function (){
    move('left');
});

let images = document.querySelectorAll('.carousel object');
let slider = [];
for (let i = 0; i < images.length; i++) {
    slider[i] = images[i].data;
    images[i].remove();
}
let boxes = document.querySelectorAll('.carousel__box');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].remove();
}

let carouselTextObject = document.createElement('div');
carouselTextObject = carouselText;

let step = 0;
let carousel =  Array.from(document.querySelectorAll('.carousel__box'));

function carouselObject (position, left) {
    let objectDiv = document.createElement('div');
    let objectImg = document.createElement('object');
    objectImg.data = slider[position];
    objectImg.classList.add('carousel__object');
    objectDiv.classList.add('carousel__box');
    objectDiv.style.left = left;
    if (position == 0) {
        objectDiv.appendChild(carouselTextObject);
    }
    objectDiv.appendChild(objectImg);
    document.querySelector('.carousel').appendChild(objectDiv);
    carousel.push(objectDiv);
}

function draw() {
    carouselObject (0, "0%");
    carouselObject (1, "100%");
    carouselObject (2, "-100%");
};
draw();

function drawRight() {
    let position = step - 1;
    if (position < 0) {
        position = slider.length - 1;
    }
    carouselObject (position, "100%");
    step++;
    if (step == slider.length) {
        step = 0;
    }
};

function drawLeft() {
    let position = step + 1;
    if (position == slider.length) {
        position = 0;
    }
    carouselObject(position, "-100%");
    step--;
    if (step < 0) {
        step = slider.length - 1;
    }
};

function move(direction) {
    if (direction == 'right') {
        buttonRight.disabled = true;
        buttonLeft.disabled = true;
        for (let i = 0; i < carousel.length; i++) {
            if (carousel[i].style.left == "-100%") {
                carousel[i].remove();
            }
        }
        for (let i = 0; i < carousel.length; i++) {
            if (carousel[i].style.left == "0%") {
                carousel[i].style.left = "-100%";
            }
            else {
                carousel[i].style.left = "0%";
            }
        }
        setTimeout(function(){
            drawRight(); 
            buttonRight.disabled = false;
            buttonLeft.disabled = false;
        }, 500);
    }
    else {
        buttonRight.disabled = true;
        buttonLeft.disabled = true;
        for (let i = 0; i < carousel.length; i++) {
            if (carousel[i].style.left == "100%") {
                carousel[i].remove();
            }
        }
        for (let i = 0; i < carousel.length; i++) {
            if (carousel[i].style.left == "0%") {
                carousel[i].style.left = "100%";
            }
            else {
                carousel[i].style.left = "0%";
            }
        }
        setTimeout(function(){
            drawLeft();
            buttonRight.disabled = false;
            buttonLeft.disabled = false;
        }, 500);
    }
}
