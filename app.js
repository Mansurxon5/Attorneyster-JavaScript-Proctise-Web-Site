'use strict';

const bars = document.querySelector('.bars'),
    times = document.querySelector('.times'),
    menu = document.querySelector('.menu');

bars.addEventListener('click',() => {
    menu.classList.toggle('active');
    console.log(menu);
})

times.addEventListener('click', () => {
    menu.classList.remove('active')
})