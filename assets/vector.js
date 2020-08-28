// Adaptation of the vector object from the p5.js library, 2D for now

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.mag = this.mag();
        this.dir = this.heading();
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    add(x, y = null) {
        var temp = new Vector(x.x + y.x, x.y + y.y);
        if (typeof x === 'object') {
            if (y === null) {
                temp.x += x.x;
                temp.y += x.y;
            } else {
                temp.x = x.x + y.x;
                temp.y = y.x + y.y;
            }
        } else {
            temp.x += x;
            temp.y += y;
        }

        return temp;
    }

    sub(x, y = null) {
        var temp = new Vector(this.x, this.y);
        if (typeof x === 'object') {
            if (y === null) {
                temp.x -= x.x;
                temp.y -= x.y;
            } else {
                
            }
        } else {
            temp.x -= x;
            temp.y -= y;
        }

        return temp;
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

    dist(v1, v2) {
        return Math.sqrt((v1.x - v2.x) ^ 2 + (v2.x - v2.y) ^ 2);
    }

    mag() {
        return Math.sqrt(this.x^2 + this.y^2);
    }

    setMag(m) {
        this.x = Math.sin(this.dir) * m;
        this.y = Math.cos(this.dir) * m;
    }

    heading() {
        return ctg(this.y/this.x);
    }
}