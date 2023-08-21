/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (V, x) {
    C = [-Infinity, Infinity];//candidiates to pair ( sorted )
    let locate = (n) => {//logn
        let [i_l, i_r] = [0, C.length - 1];
        while (i_r > i_l) {
            let i_m = i_l + ((i_r - i_l + 1) >>> 1);
            if (C[i_m] <= n) { i_l = i_m; }
            else { i_r = i_m - 1; }
        }
        return i_l;
    }

    for (let j = x; j < V.length; ++j) {//n
        C.push(V[j]);
    }
    C.sort((a, b) => a - b);//nlogn
    //console.log(C)
    let a = Infinity;
    for (let i = 0; i + x < V.length; ++i) {
        let i_ = locate(V[i]);
        a = Math.min(a, Math.abs(V[i] - C[i_]), Math.abs(V[i] - C[i_ + 1]));
        //console.log(C)
        //console.log(i, i_, i_ + 1);
        //console.log(V[i], C[i_], C[i_ + 1]);
        //console.log("located " + locate(V[i + x]))
        C.splice(locate(V[i + x]), 1);
        // console.log(C);
    }

    return a;
};