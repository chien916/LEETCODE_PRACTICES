/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let numOfBits_n = Math.floor(Math.log2(n)) + 1;
    if(n===0) return 1;
    for (let i_n = 0; i_n < numOfBits_n; ++i_n) 
        n ^= (1 << i_n);
    return n;
};
bitwiseComplement(5);