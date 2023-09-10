// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function (n) {
//     if (n < 4) return Math.max(0,n - 2);
//     let A = Array(n - 1).fill(true);
//     A[0] = false;//1 is not prime number by definition
//     for (let i = 2; i < n; ++i) {
//         for (let j = 2; j < n; ++j) {
//             //console.log(i, j)
//             if (i * j >= n) break;
//             A[i * j - 1] = false;
//         }
//     }
//     //console.log(A)
//     let a = 0;
//     for (let i = 0; i < A.length; ++i) {
//         if (A[i]) ++a;
//     }
//     return a;
// };

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let A = Array(n).fill(1);
    for (let i = 2; i ** 2 <= n; ++i) {
        for (let j = 0; A[i] && i ** 2 + j * i <= n; ++j) {
            A[i ** 2 + j * i] = 0;
        }
    }
    let x = 0;
    console.log(A)
    for (let i = 2; i < n; ++i) {
        x += A[i];
    }
    return x;
};