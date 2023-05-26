/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let cache_A = [1];//1 is defined as ugly number as exceptions
    let ptr_A = [[2, 0], [3, 0], [5, 0]];
    while (cache_A.length < n) {
        ptr_A.sort((a_A, b_A) => cache_A[a_A[1]] * a_A[0] - cache_A[b_A[1]] * b_A[0]);
        let currUglyNumber_n = ptr_A[0][0] * cache_A[ptr_A[0][1]];
        if (currUglyNumber_n !== cache_A[cache_A.length - 1]) cache_A.push(currUglyNumber_n);
        ++ptr_A[0][1];
    }
    return cache_A[cache_A.length - 1];
};

console.log(nthUglyNumber(10))