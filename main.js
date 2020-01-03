'use strict';
let p = document.querySelector('p'),
    elem = document.querySelector('#box');

elem.addEventListener('mousemove', () => {
    p.innerHTML = 'X: ' + event.clientX + ' ' + 'Y: ' + event.clientY;
})