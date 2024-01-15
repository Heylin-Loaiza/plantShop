import './style.css';

const div = document.getElementById('hello');
const title = document.createElement('h1');
title.textContent = 'Hola Mundo';  // Agrega un texto al elemento h1
title.classList.add('color');

div.appendChild(title);  // Usa appendChild para agregar el elemento h1 al div

console.log(div);