class Fluid {
    constructor(dt, diffusion, viscosity) {
        this.size;
        this.dt;
        this.diff;
        this.visc;

        this.s = [];
        this.density = [];

        this.Vx = [];
        this.Vy = [];
        this.Vx0 = [];
        this.Vy0 = [];

        this.size = N;
        this.dt = dt;
        this.diff = diffusion;
        this.visc = viscosity;

        /* this.s = calloc(N * N * N, sizeof(float));
        this.density = calloc(N * N * N, sizeof(float));

        this.Vx = calloc(N * N * N, sizeof(float));
        this.Vy = calloc(N * N * N, sizeof(float));

        this.Vx0 = calloc(N * N * N, sizeof(float));
        this.Vy0 = calloc(N * N * N, sizeof(float)); */
    }

    step() {
        var visc     = this.visc;
        var diff     = this.diff;
        var dt       = this.dt;
        var Vx       = this.Vx;
        var Vy       = this.Vy;
        var Vx0      = this.Vx0;
        var Vy0      = this.Vy0;
        var s        = this.s;
        var density  = this.density;
        
        diffuse(1, Vx0, Vx, visc, dt);
        diffuse(2, Vy0, Vy, visc, dt);
        
        project(Vx0, Vy0, Vx, Vy);
        
        advect(1, Vx, Vx0, Vx0, Vy0, dt);
        advect(2, Vy, Vy0, Vx0, Vy0, dt);
        
        project(Vx, Vy, Vx0, Vy0);
        
        diffuse(0, s, density, diff, dt);
        advect(0, density, s, Vx, Vy, dt);
    }

    addDensity(x, y, amount) {
        var index = IX(x, y, N);
        this.density[index] += amount;
    }

    addVelocity(x, y, amountX, amountY) {
        var index = IX(x, y, this.size);
        this.Vx[index] += amountX;
        this.Vy[index] += amountY;
    }
}