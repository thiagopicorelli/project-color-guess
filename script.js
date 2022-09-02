const rgbColor = document.getElementById('rgb-color');
const listaDeCores = document.getElementById('lista-de-cores');
const answer = document.getElementById('answer');

let color;

function getRandomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createNewColor() {
  const newColor = document.createElement('div');
  newColor.className = 'ball';
  newColor.style.backgroundColor = getRandomRgb();
  listaDeCores.appendChild(newColor);
}

function startGame() {
  color = getRandomRgb();
  rgbColor.innerHTML = color.replace('rgb','');
  answer.innerHTML = 'Escolha uma cor';

  for(let i = 0; i < 6; i += 1) {
    createNewColor();
  }
}

startGame();
