"use strict";

let burgerElem = document.getElementById('header_burger');
let cartElem = document.getElementById('cart');
let menuElem = document.getElementById('header_menu');
let bodyElem = document.getElementById('body');
let cartListElem = document.getElementById('cart_list');
let featuresElem = document.getElementById('header_features');
let subElem = document.getElementById('sub_nav');

burgerElem.addEventListener('click', function (event) {
    burgerElem.classList.toggle('active');
    menuElem.classList.toggle('active');
    bodyElem.classList.toggle('lock');
});

cartElem.addEventListener('click', function (event) {
    cartListElem.classList.toggle('active');
});

featuresElem.addEventListener('click', function (event) {
    subElem.classList.toggle('active');
});



