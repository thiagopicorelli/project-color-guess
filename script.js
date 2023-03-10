const scoreBoard = document.getElementById('score');
const rgbColor = document.getElementById('rgb-color');
const listaDeCores = document.getElementById('lista-de-cores');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

let color;
let score = 0;
let end = false;

function getRandomRgb() {
  const primeiraParte = `rgb(${Math.floor(Math.random() * 256)},`;
  return `${primeiraParte} ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function getRandomPosition() {
  return Math.floor(Math.random() * 6);
}

function changeScore(points) {
  score += points;
  scoreBoard.innerHTML = score;
}

function endGame(event) {
  if (end === true) {
    return;
  }

  console.log(event.target.style.backgroundColor);
  console.log(color);

  if (event.target.style.backgroundColor === color) {
    answer.innerHTML = 'Acertou!';
    changeScore(3);
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
  end = true;
}

function createNewColor(ballColor) {
  const newColor = document.createElement('div');
  newColor.className = 'ball';
  newColor.style.backgroundColor = ballColor;
  newColor.addEventListener('click', endGame);
  listaDeCores.appendChild(newColor);
}

function startGame() {
  end = false;

  color = getRandomRgb();
  document.body.style.backgroundColor = getRandomRgb();
  rgbColor.innerHTML = color.replace('rgb', '');
  answer.innerHTML = 'Escolha uma cor';

  listaDeCores.innerHTML = '';

  const resultPos = getRandomPosition();

  for (let i = 0; i < 6; i += 1) {
    if (i === resultPos) {
      createNewColor(color);
    } else {
      createNewColor(getRandomRgb());
    }
  }
}

startGame();

resetButton.addEventListener('click', startGame);
