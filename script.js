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
let images1 = document.querySelectorAll('.carousel__box');
for (let i = 0; i < images1.length; i++) {
    images1[i].remove();
}

let carouselTextObject = document.createElement('div');
carouselTextObject = carouselText;

let step = 0;

function draw() {
    let objectImg1 = document.createElement('object');
    objectImg1.data = slider[0];
    objectImg1.classList.add('carousel__object');
    let objectDiv1 = document.createElement('div');
    objectDiv1.classList.add('carousel__box');
    objectDiv1.style.left = "0%";
    objectDiv1.appendChild(objectImg1);
    objectDiv1.appendChild(carouselTextObject);
    document.querySelector('.carousel').appendChild(objectDiv1);

    let objectImg2 = document.createElement('object');
    objectImg2.data = slider[1];
    objectImg2.classList.add('carousel__object');
    let objectDiv2 = document.createElement('div');
    objectDiv2.classList.add('carousel__box');
    objectDiv2.style.left = "100%";
    objectDiv2.appendChild(objectImg2);
    document.querySelector('.carousel').appendChild(objectDiv2);

    let objectImg3 = document.createElement('object');
    objectImg3.data = slider[2];
    objectImg3.classList.add('carousel__object');
    let objectDiv3 = document.createElement('div');
    objectDiv3.classList.add('carousel__box');
    objectDiv3.style.left = "-100%";
    objectDiv3.appendChild(objectImg3);
    document.querySelector('.carousel').appendChild(objectDiv3);

};
draw();

let images2 =  Array.from(document.querySelectorAll('.carousel__box'));

function drawRight() {
    let objectImg = document.createElement('object');
    let k;
    if (step == 0) {
        k = 2;
    }
    else if (step == 1) {
        k = 0;
    }
    else if (step == 2) {
        k = 1;
    }
    objectImg.data = slider[k];
    objectImg.classList.add('carousel__object');
    let objectDiv = document.createElement('div');
    objectDiv.classList.add('carousel__box');
    objectDiv.style.left = "100%";
    objectDiv.appendChild(objectImg);
    if (k == 0) {
        objectDiv.appendChild(carouselTextObject);
    }
    document.querySelector('.carousel').appendChild(objectDiv);
    images2.push(objectDiv);
    if (step + 1 == slider.length){
        step = 0;
    }
    else {
        step++;
    }
};

function drawLeft() {
    let objectImg = document.createElement('object');
    let k;
    if (step == 0) {
        k = 1;
    }
    else if (step == 1) {
        k = 2;
    }
    else if (step == 2) {
        k = 0;
    }
    objectImg.data = slider[k];
    objectImg.classList.add('carousel__object');
    let objectDiv = document.createElement('div');
    objectDiv.classList.add('carousel__box');
    objectDiv.style.left = "-100%";
    objectDiv.appendChild(objectImg);
    if (k == 0) {
        objectDiv.appendChild(carouselTextObject);
    }
    document.querySelector('.carousel').appendChild(objectDiv);
    images2.push(objectDiv);
    if (step == 0) {
        step = slider.length - 1;
    }
    else {
        step--;
    }
};

function move(direction) {
    if (direction == 'right') {
        buttonRight.disabled = true;
        buttonLeft.disabled = true;
        for (let i = 0; i < images2.length; i++) {
            if (images2[i].style.left == "-100%") {
                images2[i].remove();
            }
        }
        for (let i = 0; i < images2.length; i++) {
            if (images2[i].style.left == "0%") {
                images2[i].style.left = "-100%";
            }
            else {
                images2[i].style.left = "0%";
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
        for (let i = 0; i < images2.length; i++) {
            if (images2[i].style.left == "100%") {
                images2[i].remove();
            }
        }
        for (let i = 0; i < images2.length; i++) {
            if (images2[i].style.left == "0%") {
                images2[i].style.left = "100%";
            }
            else {
                images2[i].style.left = "0%";
            }
        }
        setTimeout(function(){
            drawLeft();
            buttonRight.disabled = false;
            buttonLeft.disabled = false;
        }, 500);
    }
}
