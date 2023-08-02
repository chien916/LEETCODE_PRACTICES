/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (V_p) {
    let H = [[-Infinity, Infinity, 0]];
    let indexOf_ = (P) => {
        //first index of range including P[0]
        let [l, r] = [0, H.length - 1];
        while (l < r) {
            let m = r - ((r - l) >>> 1);
            if (H[m][0] <= P[0]) l = m;
            else r = m - 1;
        }
        //last index of range including 
        let [l_, r_] = [0, H.length - 1];
        while (l_ < r_) {
            let m = l_ + ((r_ - l_) >>> 1);
            if (H[m][1] >= P[1]) r_ = m;
            else l_ = m + 1;
        }
        return [l, l_];
    }
    let query = (P) => {
        let a = 0;
        let [i, i_] = indexOf_(P);
        for (let _i = i; _i <= i_; ++_i) {
            a = Math.max(a, H[_i][2]);
        }
        return [a, i, i_];
    }
    let a = 0;
    let add = (P) => {
        P = [P[0], P[0] + P[1]];
        let [h, i, i_] = query(P);
        let h_ = P[1] - P[0] + h;//new height
        let L = [H[i][0], P[0], H[i][2]];
        let M = [P[0], P[1], h_];
        let R = [P[1], H[i_][1], H[i_][2]];
        H.splice(i, (i_ - i + 1));
        if (R[0] < R[1]) H.splice(i, 0, R);
        H.splice(i, 0, M);
        if (L[0] < L[1]) H.splice(i, 0, L);
        a = Math.max(a, h_);
    }

    let A = [];
    for (let P of V_p) {
        add(P);
        A.push(a);
    }

    return A;
};

console.log(fallingSquares([[1, 2], [2, 3], [6, 1]]))