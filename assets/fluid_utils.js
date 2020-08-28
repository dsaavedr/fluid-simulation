function diffuse(b, Vx, Vx0, diff, dt) {
    var a = dt * diff * (N - 2) * (N - 2);
    lin_solve(b, Vx, Vx0, a, 1 + 6 * a, iter, N);
}

function lin_solve(b, x, x0, a, c) {
    var cRecip = 1.0 / c;
    for (var k = 0; k < iter; k++) {
        for (var j = 1; j < N - 1; j++) {
            for (var i = 1; i < N - 1; i++) {
                x[IX(i, j)] =
                    (x0[IX(i, j)]
                        + a*(    x[IX(i+1, j  )]
                                +x[IX(i-1, j  )]
                                +x[IX(i  , j+1)]
                                +x[IX(i  , j-1)]
                        )) * cRecip;
            }
        }
        set_bnd(b, x);
    }
}

function project(velocX, velocY, p, div) {
    for (var j = 1; j < N - 1; j++) {
        for (var i = 1; i < N - 1; i++) {
            div[IX(i, j)] = -0.5 * (
                         velocX[IX(i+1, j  )]
                        -velocX[IX(i-1, j  )]
                        +velocY[IX(i  , j+1)]
                        -velocY[IX(i  , j-1)]
                )/N;
            p[IX(i, j)] = 0;
        }
    }
    set_bnd(0, div); 
    set_bnd(0, p);
    lin_solve(0, p, div, 1, 6);
    
    for (var j = 1; j < N - 1; j++) {
        for (var i = 1; i < N - 1; i++) {
            velocX[IX(i, j)] -= 0.5 * (  p[IX(i+1, j)]
                                            -p[IX(i-1, j)]) * N;
            velocY[IX(i, j)] -= 0.5 * (  p[IX(i, j+1)]
                                            -p[IX(i, j-1)]) * N;
        }
    }
    set_bnd(1, velocX);
    set_bnd(2, velocY);
}

function advect(b, d, d0,  velocX, velocY, dt) {
    var i0, i1, j0, j1;
    
    var dtx = dt * (N - 2);
    var dty = dt * (N - 2);
    
    var s0, s1, t0, t1;
    var tmp1, tmp2, x, y;
    
    var Nfloat = N;
    var ifloat, jfloat;
    var i, j;
    
    for(var j = 1, jfloat = 1; j < N - 1; j++, jfloat++) { 
        for(var i = 1, ifloat = 1; i < N - 1; i++, ifloat++) {
            tmp1 = dtx * velocX[IX(i, j)];
            tmp2 = dty * velocY[IX(i, j)];
            x    = ifloat - tmp1; 
            y    = jfloat - tmp2;
            
            if(x < 0.5) x = 0.5; 
            if(x > Nfloat + 0.5) x = Nfloat + 0.5; 
            i0 = Math.floor(x); 
            i1 = i0 + 1.0;
            if(y < 0.5) y = 0.5; 
            if(y > Nfloat + 0.5) y = Nfloat + 0.5; 
            j0 = Math.floor(y);
            j1 = j0 + 1.0; 
            
            s1 = x - i0; 
            s0 = 1.0 - s1;
            t1 = y - j0; 
            t0 = 1.0 - t1;
            
            var i0i = i0;
            var i1i = i1;
            var j0i = j0;
            var j1i = j1;
            
            d[IX(i, j)] = 
                s0 * ( t0 * d0[IX(i0i, j0i)]
                    + t1 * d0[IX(i0i, j1i)])
                +s1 * ( t0 * d0[IX(i1i, j0i)]
                    + t1 * d0[IX(i1i, j1i)]);
        }
    }
    set_bnd(b, d);
}

function set_bnd(b, x) {
    for (var i = 1; i < N - 1; i++) {
        x[IX(i, 0)] = b == 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
        x[IX(i, N - 1)] = b == 2 ? -x[IX(i, N - 2)] : x[IX(i, N - 2)];
      }
      for (var j = 1; j < N - 1; j++) {
        x[IX(0, j)] = b == 1 ? -x[IX(1, j)] : x[IX(1, j)];
        x[IX(N - 1, j)] = b == 1 ? -x[IX(N - 2, j)] : x[IX(N - 2, j)];
      }
    
      x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
      x[IX(0, N - 1)] = 0.5 * (x[IX(1, N - 1)] + x[IX(0, N - 2)]);
      x[IX(N - 1, 0)] = 0.5 * (x[IX(N - 2, 0)] + x[IX(N - 1, 1)]);
      x[IX(N - 1, N - 1)] = 0.5 * (x[IX(N - 2, N - 1)] + x[IX(N - 1, N - 2)]);
}