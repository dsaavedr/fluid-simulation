var x;

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;

function log(s) {
  console.log(s);
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function random(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function init() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
    
  canvas.setAttribute('width', WIDTH);
  canvas.setAttribute('height', HEIGHT);
  
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();

  ctx.strokeStyle = 'white';
  
  ani();
}

function ani() {

    // requestAnimationFrame(ani);
}

function arrow(e) {
    ctx.save();
    ctx.moveTo(0, 0);
    ctx.lineTo(e.x, e.y);
    // ctx.rotate(e.heading());
    ctx.stroke();
    ctx.restore();
}

// init();