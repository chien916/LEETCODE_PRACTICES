/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (W, k) {
    --k;//Combinatories: relationships between sticks and number of spaces is a difference of 1
    let l_w = W.length;
    let D = [];
    for (let i = 1; i < l_w; ++i) {
        D.push(W[i] + W[i - 1]);
    }
    D.sort((a, b) => a - b);
    let d = 0;
    for (let i = 0; i < k; ++i) {
        d += D[i];
    }
    for (let i = D.length - 1; i > D.length - 1 - k; --i) {
        d -= D[i];
    }
    if (d < 0) d *= -1;
    return d;
};

//console.log(putMarbles([1,3,5,1], 2));