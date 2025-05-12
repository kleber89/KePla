// main.js
const imagenes = [
    'assets/img/espacio.jpg',
    'assets/img/grupo.jpg',
    'assets/img/plato1.jpg',
];

let index = 0;
const slide = document.getElementById('slide');

setInterval(() => {
    index = (index + 1) % imagenes.length;
    slide.src = imagenes[index];
}, 3000);
