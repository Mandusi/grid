const btn = document.querySelector('button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasHeight = 480;
const canvasWidth = 480;

// CREATE GRID
function grid() {
  const tile = 60;
  for (y = 0; y < canvasHeight; y += tile) {
    for (x = 0; x < canvasWidth; x += tile) {
      ctx.fillStyle = randomColor();
      ctx.strokeRect(x, y, tile, tile);
      ctx.fillRect(x, y, tile, tile);
    }
  }
}
window.onload = grid();

// color generator
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}

function transaction() {
  return `rgb( 
    ${(y * Math.random()) % 256}, 
    ${(y * Math.random()) % 256}, 
    ${(y * Math.random()) % 256})`;
}

function gradiant() {
  return `rgb(${255 - 2 * x},${255 - x * 5},${255 - y * 1})`;
}

btn.addEventListener('click', grid);
// ${Math.random()}
// `rgb(0,0,0,${Math.random()})`
