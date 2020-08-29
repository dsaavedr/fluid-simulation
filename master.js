var c = 0,
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
  WIDTH = N * SCALE;
  HEIGHT = N * SCALE;
    
  canvas.setAttribute('width', WIDTH);
  canvas.setAttribute('height', HEIGHT);
  
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'black';
  ctx.lineWidth = 1;

  fluid = new Fluid(0.2, 0, 0.0000001);

  var px = null;
  var py = null;

  ani();
}

function ani() {
    let cx = Math.round((0.5 * WIDTH) / SCALE);
    let cy = Math.round((0.5 * HEIGHT) / SCALE);

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            fluid.addDensity(cx + i, cy + j, random(50, 150));
        }
    }

    for (let i = 0; i < 2; i++) {
        let r = random(-Math.PI, Math.PI);
        let angle = r * (i + 1);
        let v = Vector.fromAngle(angle);
        v.mult(0.4);
        t += 0.001;
        fluid.addVelocity(cx, cy, v.x, v.y);
    }

    fluid.step();
    fluid.renderD();

    requestAnimationFrame(ani);
}

init();