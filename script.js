const rgbColor = document.getElementById('rgb-color');

function getRandomRgb() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

let color = getRandomRgb();

rgbColor.innerHTML = color.replace('rgb','');