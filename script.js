const rgbColor = document.getElementById('rgb-color');
const listaDeCores = document.getElementById('lista-de-cores');
const answer = document.getElementById('answer');

let color;
let end = false;

function getRandomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function getRandomPosition() {
  return Math.floor(Math.random() * 6);
}

function endGame(event) {
  if(end === true)
    return;

  if(event.target.style.backgroundColor === color) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
  end = true;
}

function createNewColor(color) {
  const newColor = document.createElement('div');
  newColor.className = 'ball';
  newColor.style.backgroundColor = color;
  newColor.addEventListener('click', endGame);
  listaDeCores.appendChild(newColor);
}

function startGame() {
  color = getRandomRgb();
  rgbColor.innerHTML = color.replace('rgb','');
  answer.innerHTML = 'Escolha uma cor';

  const resultPos = getRandomPosition();

  for(let i = 0; i < 6; i += 1) {
    if(i === resultPos) {
      createNewColor(color);
    } else {
      createNewColor(getRandomRgb());
    }
  }
}

startGame();
