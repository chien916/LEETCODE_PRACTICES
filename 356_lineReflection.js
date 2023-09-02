/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function (A) {
    let M = new Map();//x -> [Y]
    for (let [x, y] of A) {
        if (!M.has(x)) M.set(x, new Set());
        M.get(x).add(y);
    }
    for (let [k, V] of M) {
        M.set(k, [...V]);
    }
    let A_ = [...M].sort(([x1, _1], [x2, _2]) => x1 - x2);
    for (let X of A_) {
        X[1].sort((y1, y2) => y1 - y2);
    }
    let x_mid = (A_[A_.length - 1][0] + A_[0][0]) / 2;
    if (A_.length % 2) {
        if (A_[(A_.length - 1) / 2][0] - x_mid) return false;//singlular midpoint x is not on mid
    }
    let [i_l, i_r] = [0, A_.length - 1];
    while (i_l < i_r) {
        let [x_l, x_r] = [A_[i_l][0], A_[i_r][0]];
        if ((x_mid - x_l) - (x_r - x_mid))
            return false;//symmetry y-line doesnt match
        let [Y_l, Y_r] = [A_[i_l][1], A_[i_r][1]];
        if (Y_l.length - Y_r.length)
            return false;//number of y's doesn't match
        for (let i = 0; i < Y_l.length; ++i) {
            if (Y_l[i] - Y_r[i])
                return false;//y value doesn't match
        }
        // for (let i_l = 0; i_l < Y_l.length; ++i_l) {
        //     let i_r = Y_r.length - 1 - i_l;
        //     let [x_l, x_r] = [Y_l[i_l], Y_r[i_r]];
        //     let [d_xl, d_xr] = [x_mid - x_l, x_r - x_mid];
        //     console.log(``)
        //     if (d_xl - d_xr) return false;
        // }
        ++i_l;
        --i_r;
    }
    return true;
};

isReflected([[0,0],[1,0],[3,0]])