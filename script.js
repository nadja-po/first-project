"use strict";
document.getElementById('header_burger').onclick = function() {
    document.getElementById('header_burger').classList.toggle('active');
    document.getElementById('header_menu').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
}
