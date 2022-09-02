const rgbColor = document.getElementById('rgb-color');
const listaDeCores = document.getElementById('lista-de-cores');

function getRandomRgb() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

let color = getRandomRgb();
rgbColor.innerHTML = color.replace('rgb','');

function createNewColor() {
  const newColor = document.createElement('div');
  newColor.className = 'ball';
  newColor.style.backgroundColor = getRandomRgb();
  listaDeCores.appendChild(newColor);
}

for(let i = 0; i < 6; i += 1) {
  createNewColor();
}
