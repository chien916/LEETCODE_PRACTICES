/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    //[0...n-1] [n...k]
    let l_w = k + 1;//k different differences need k+1 numbers
    let l_n = n - l_w;
    let V_w = Array(k + 1).fill().map((_, i) => i + 1);
    let V_w_ = [];
    for (let i = false; V_w.length > 0; i = !i) {
        if (i) V_w_.push(V_w.shift());
        else V_w_.push(V_w.pop());
    }
    let V_n = Array(l_n).fill().map((_, i) => i + 1 + l_w).reverse();
    return V_n.concat(V_w_);
};

console.log(constructArray(5, 2))

/**
 * 1 2 3 4
 * 2 4 1 3
 * 
 * 
 * 1 2 3 4 5
 * 3 5 2 4 1
 * 
 * 1 2 3 4 5 6
 * 
 * 
 * 1 2
 * 1 2
 */