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

    addDensity(x, y, amount) {
        
    }
}