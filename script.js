"use strict";

let burgerElem = document.getElementById('header_burger');
let cartElem = document.getElementById('cart');
let menuElem = document.getElementById('header_menu');
let bodyElem = document.getElementById('body');
let cartListElem = document.getElementById('cart_list');
let featuresElem = document.getElementById('button_submenu');
let submenuElem = document.getElementById('submenu');
let subElem = document.getElementById('sub_nav');
let headerListElem = document.getElementById('header_list'); 
let buttonElem = document.getElementById('button_back');

burgerElem.addEventListener('click', function (event) {
    burgerElem.classList.toggle('active');
    menuElem.classList.toggle('active');
    bodyElem.classList.toggle('lock');
    submenuElem.classList.toggle('active');
    if (subElem.classList.contains('active')) {
        menuElem.classList.remove('active');
        subElem.classList.remove('active');
    }
});

cartElem.addEventListener('click', function (event) {
    cartListElem.classList.toggle('active');
});

featuresElem.addEventListener('click', function (event) {
    menuElem.classList.remove('active');
    subElem.classList.toggle('active');
});

submenuElem.addEventListener('click', function (event) {
   if (!submenuElem.classList.contains('active')) {
        subElem.classList.toggle('active');
        menuElem.classList.remove('active');
   };
});

buttonElem.addEventListener('click', function (event) {
    menuElem.classList.toggle('active');
    subElem.classList.toggle('active');
});


