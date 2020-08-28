class Walker {
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(1, 0);
    }

    update() {
        this.pos.add(this.vel);
    }

    show() {
        point(this.pos.x, this.pos.y);
    }
}