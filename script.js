const scoreBoard = document.getElementById('score');
const rgbColor = document.getElementById('rgb-color');
const listaDeCores = document.getElementById('lista-de-cores');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

let color;
let score = 0;
let end = false;

function getRandomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function getRandomPosition() {
  return Math.floor(Math.random() * 6);
}

function changeScore(points) {
  score += points;
  scoreBoard.innerHTML = score;
}

function endGame(event) {
  if(end === true)
    return;

  if(event.target.style.backgroundColor === color) {
    answer.innerHTML = 'Acertou!';
    changeScore(3);
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
  end = false;

  color = getRandomRgb();
  rgbColor.innerHTML = color.replace('rgb','');
  answer.innerHTML = 'Escolha uma cor';

  listaDeCores.innerHTML = '';

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

resetButton.addEventListener('click', startGame);
