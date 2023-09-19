import modalImgs from "./modal-imgs.js";

const $imgs = document.querySelectorAll('.js');
const $pizzas = document.querySelectorAll('.js-pizza')
const $lomos = document.querySelectorAll('.js-lomo')

document.addEventListener('DOMContentLoaded', () => {
 console.log('hola Mundo');
 modalImgs($imgs);
 modalImgs($pizzas);
 modalImgs($lomos);
});