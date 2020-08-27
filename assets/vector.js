// Adaptation of the vector object from the p5.js library, 2D for now

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag = Math.sqrt((x) ^ 2 + (y) ^ 2);
        this.dir = 0;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    add(x, y = null) {
        if (typeof x === 'object') {
            this.x += x.x;
            this.y += x.y;
        } else {
            this.x += x;
            this.y += y;
        }
    }

    sub(x, y) {
        if (typeof x === 'object') {
            this.x -= x.x;
            this.y -= x.y;
        } else {
            this.x -= x;
            this.y -= y;
        }
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
    }

    dist(v1, v2) {
        return Math.sqrt((v1.x - v2.x) ^ 2 + (v2.x - v2.y) ^ 2);
    }

    setMag(m) {
        this.mag = m;
    }

    heading() {
        // Calculate the angle of rotation for this vector
    }
}