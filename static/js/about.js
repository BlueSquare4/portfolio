const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let width, height, frameCount, centerX, centerY, radius;

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  frameCount = 0;
  centerX = width / 2;
  centerY = height / 2;
  radius = Math.min(width, height) / 2;
  canvas.width = width;
  canvas.height = height;
}

function draw() {
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.strokeStyle = "#fce570";
  context.lineWidth = 10;
  for (let i = 0; i < 360; i += 10) {
    const x = centerX + radius * Math.cos((i + frameCount) * (Math.PI / 180));
    const y = centerY + radius * Math.sin((i + frameCount) * (Math.PI / 180));
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }
  context.closePath();
  context.stroke();
  frameCount++;
  requestAnimationFrame(draw);
}

init();
draw();
