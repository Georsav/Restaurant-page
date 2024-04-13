import './style.css';
import {createHome} from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

console.log("Hello");

//createHome();

homeBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    createHome();
});

menuBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    createMenu();
});

aboutBtn.addEventListener('click', function() {
    document.getElementById('content').innerHTML = "";
    createAbout();
})