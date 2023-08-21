/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 4) return Math.max(0,n - 2);
    let A = Array(n - 1).fill(true);
    A[0] = false;//1 is not prime number by definition
    for (let i = 2; i < n; ++i) {
        for (let j = 2; j < n; ++j) {
            //console.log(i, j)
            if (i * j >= n) break;
            A[i * j - 1] = false;
        }
    }
    //console.log(A)
    let a = 0;
    for (let i = 0; i < A.length; ++i) {
        if (A[i]) ++a;
    }
    return a;
};