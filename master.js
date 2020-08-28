var N = 256,
    iter = 4,
    fluid,
    WIDTH, HEIGHT;

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;

function init() {
  /* WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight; */
  WIDTH = N;
  HEIGHT = N;
    
  canvas.setAttribute('width', WIDTH);
  canvas.setAttribute('height', HEIGHT);
  
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;

  fluid = new Fluid(0.1, 0, 0);
  
  ani();
}

function ani() {

    fluid.step();

    // requestAnimationFrame(ani);
}

init();