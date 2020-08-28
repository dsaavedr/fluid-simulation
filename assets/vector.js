// Adaptation of the vector object from the p5.js library, 2D for now

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.m = this.mag();
        this.dir = this.heading();
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    static add(v0, v1) {
        var r = new Vector(v0.x + v1.x, v0.y + v1.y);
        return r;
    }

    add(v0, v1 = null) {
        var r = new Vector(this.x, this.y);
        if (typeof v0 === 'object') {
            r.x += v0.x;
            r.y += v0.y;
        } else {
            r.x += v0;
            r.y += v1;
        }

        return r;
    }

    static sub(v0, v1) {
        var r = new Vector(v0.x - v1.x, v0.y - v1.y);
        return r;
    }

    sub(v0, v1 = null) {
        var r = new Vector(this.x, this.y);
        if (typeof v0 === 'object') {
            r.x -= v0.x;
            r.y -= v0.y;
        } else {
            r.x -= v0;
            r.y -= v1;
        }

        return r;
    }

    mult(e) {
        var res = new Vector(this.x, this.y);
        if (typeof e === 'object') {
            res.x *= e.x;
            res.y *= e.y;
        } else {
            res.x *= e;
            res.y *= e;
        }

        return res;
    }

    div(e) {
        var res = new Vector(this.x, this.y);
        if (typeof e === 'object') {
            res.x /= e.x;
            res.y /= e.y;
        } else {
            res.x /= e;
            res.y /= e;
        }

        return res;
    }

    static dist(v1, v2) {
        return Math.sqrt(Math.pow((v1.x - v2.x), 2) + Math.pow((v2.x - v2.y), 2));
    }

    mag() {
        var i = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        return Math.sqrt(i);
    }

    setMag(m) {
        this.m = m;
        this.x = Math.cos(this.dir) * m;
        this.y = Math.sin(this.dir) * m;
    }

    heading() {
        return Math.atan(this.y/this.x);
    }
}