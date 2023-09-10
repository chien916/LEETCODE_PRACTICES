/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (A, k_max) {
    let [h, w] = [A.length, A[0].length];

    if (h === 1 && w === 1) return 0;
    // let DP = Array(h).fill().map(
    //     () => Array(w).fill().map(
    //         () => Array(k + 1).fill(Infinity)
    //     )
    // );
    let V = Array(h).fill().map(
        () => Array(w).fill(Infinity)
    );
    //DP[0][0] = 0;
    // //visited for bfs
    // let V = Array(h * w).fill(false);
    // V[0][0] = true;
    //bfs
    let Q = [[0, 0, 0, 0]];
    V[0][0][0] = 0;
    let s_min = Infinity;
    while (Q.length) {
        let [i, j, k, s] = Q.shift();
        for (let [i_, j_] of [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]]) {
            if (i_ <= -1 || j_ <= -1 || i_ >= h || j_ >= w) { continue; }
            let k_ = k;
            let s_ = s + 1;
            if (A[i_][j_]) { ++k_; }//next grid is blocked needs elimination
            if (k_ > k_max) { continue; }//visited
            if (k_ >= V[i_][j_]) continue;
            V[i_][j_] = k_;//mark as visited
            if (i_ === h - 1 && j_ === w - 1 && s_ < s_min) {
                s_min = s_;
                //console.log(s_)
            }
            Q.push([i_, j_, k_, s_]);
        }
        //console.log(Q)
    }
    if (s_min === Infinity) return -1;
    else return s_min;
};

console.log(shortestPath([[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1))

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number}
//  */
// var shortestPath = function (A, k) {
//     /**
//      * dp knapsack
//      * DP[i][j][k] ->
//      * min steps to reach (i,j) eliminating k obstacles
//      * DP[i*j][k] to reduce
//      */
//     let [h, w] = [A.length, A[0].length];
//     let DP = Array(h * w).fill().map(
//         () => Array(k + 1).fill(Infinity)
//     );
//     DP[0][0] = 0;
//     for (let _ = 0; _ <3; ++_) {
//         for (let i = 0; i < h; ++i) {
//             for (let j = 0; j < w; ++j) {
//                 for (let k_ = 0; k_ <= k; ++k_) {
//                     for (let [i_, j_] of [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]]) {
//                         if (i_ <= -1 || j_ <= -1 || i_ >= h || j_ >= w) { continue; }
//                         let k__ = k_;//k'' previous k' needed
//                         if (A[i][j]) { --k__; }
//                         if (k__ < 0) { continue; }//0 obstacle case
//                         let dp_ = DP[i_ * w + j_][k__] + 1;
//                         if (dp_ < DP[i * w + j][k_]) { DP[i * w + j][k_] = dp_; }
//                     }
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < h; ++i) {
//         //console.log((i + 50).toString().padStart(3, " "), DP.slice(w * i, w * (i + 1)).map(_DP => _DP.reduce((p, v) => p || isFinite(v), false) ? '1' : '0').join(""))
//         console.log((i + 50).toString().padStart(3, " "), DP.slice(w * i, w * (i + 1)).map(_DP => _DP.slice(0, 1).reduce((p, v) => p || isFinite(v), false) ? '1' : '0').join(""))
//     }

//     let _r = Infinity;
//     for (let i = 0; i <= k; ++i) {
//         if (DP[h * w - 1][i] < _r) _r = DP[h * w - 1][i];
//         //console.log(DP[h * w - 1][i])
//     }
//     if (_r === Infinity) return -1;
//     return _r;
// };

