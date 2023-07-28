/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (V_n) {
    let l_n = V_n.length;
    if (l_n <= 2) return 0;
    let l_b = l_n + 1;
    let B = Array(l_b).fill().map(() => []);
    let [n_max, n_min] = V_n.reduce((p, v) => [Math.max(p[0], v), Math.min(p[1], v)], [-Infinity, Infinity]);
    let r = Math.ceil((n_max - n_min) / l_b);
    for (let n of V_n) {
        let i =Math.floor((n_min+n) / r);
        B[i].push(n);
    }
    B.forEach((A) => A.sort((a, b) => a - b));
    for (let i = 1; i < l_b - 1; ++i) {
        if (B[i].length === 0) {
            let a = B[i + 1][0] - B[i - 1][B[i - 1].length - 1];
            return a;
        }
    }

};

console.log(maximumGap([3, 6, 9, 1]))