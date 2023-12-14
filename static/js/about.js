const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let width, height, frameCount, centerX, centerY, radius, maxRadius, thrownObject;

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  frameCount = 0;
  centerX = width / 2;
  centerY = height / 2;
  radius = 0;
  maxRadius = Math.min(width, height) / 2; // Set the maximum radius
  thrownObject = { x: 0, y: 0, speed: 3, angle: Math.random() * 360 }; // Initial position and speed of thrown object
  thrownObject1 = { x: 0, y: 0, speed: 3, angle: Math.random() * 120 }; // Initial position and speed of thrown object
  thrownObject2 = { x: 0, y: 0, speed: 3, angle: Math.random() * 180 }; // Initial position and speed of thrown object
  thrownObject3 = { x: 0, y: 0, speed: 3, angle: Math.random() * 270 }; // Initial position and speed of thrown object
  canvas.width = width;
  canvas.height = height;
}

function draw() {
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.strokeStyle = "#ecc969";
  context.lineWidth = 10;

  // Draw growing circle
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

  // Draw thrown object
  context.fillStyle = "#cee67a";
  context.beginPath();
  thrownObject.x = centerX + (radius + 10) * Math.cos((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject.y = centerY + (radius + 10) * Math.sin((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject1.x = centerX + (radius + 10) * Math.cos((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject1.y = centerY + (radius + 10) * Math.sin((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject2.x = centerX + (radius + 10) * Math.cos((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject2.y = centerY + (radius + 10) * Math.sin((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject3.x = centerX + (radius + 10) * Math.cos((thrownObject.angle + frameCount) * (Math.PI / 180));
  thrownObject3.y = centerY + (radius + 10) * Math.sin((thrownObject.angle + frameCount) * (Math.PI / 180));
  context.arc(thrownObject.x, thrownObject.y, 5, 0, 2 * Math.PI);
  context.arc(thrownObject1.x, thrownObject1.y, 10, 0, 4 * Math.PI);
  context.arc(thrownObject2.x, thrownObject2.y, 15, 0, 6 * Math.PI);
  context.arc(thrownObject3.x, thrownObject3.y, 205, 0, 8 * Math.PI);
  context.fill();

  // Increase the radius (adjust this value as needed)
  radius += 1;

  // Reset the radius to zero when it reaches the maximum radius
  if (radius > maxRadius) {
    radius = 0;
    // Reset the thrown object's angle when the circle resets
    thrownObject.angle = Math.random() * 360;
    thrownObject1.angle = Math.random() * 120;
    thrownObject2.angle = Math.random() * 180;
    thrownObject3.angle = Math.random() * 270;
  }

  requestAnimationFrame(draw);
}

init();
draw();
