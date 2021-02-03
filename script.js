"use strict";

let burgerElement = document.getElementById('header_burger');
let cartElement = document.getElementById('cart');
let menuElement = document.getElementById('header_menu');
let bodyElement = document.getElementById('body');
let cartListElement = document.getElementById('cart_list');
let featuresElement = document.getElementById('button_submenu');
let submenuElement = document.getElementById('submenu');
let subElement = document.getElementById('sub_nav');
let headerListElement = document.getElementById('header_list'); 
let buttonElement = document.getElementById('button_back');

burgerElement.addEventListener('click', function (event) {
    burgerElement.classList.toggle('active');
    menuElement.classList.toggle('active');
    bodyElement.classList.toggle('lock');
    submenuElement.classList.toggle('active');
    if (subElement.classList.contains('active')) {
        menuElement.classList.remove('active');
        subElement.classList.remove('active');
    }
});

cartElement.addEventListener('click', function (event) {
    cartListElement.classList.toggle('active');
});

featuresElement.addEventListener('click', function (event) {
    menuElement.classList.remove('active');
    subElement.classList.toggle('active');
});

submenuElement.addEventListener('click', function (event) {
   if (!submenuElement.classList.contains('active')) {
        subElement.classList.toggle('active');
        menuElement.classList.remove('active');
   };
});

buttonElement.addEventListener('click', function (event) {
    menuElement.classList.toggle('active');
    subElement.classList.toggle('active');
});


