/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (V) {
    //step1: find the XOR result of the two unique numbers
    let r = 0;
    for (let n of V) r ^= n;
    /**
     * XOR result of two number: 
     * The set bit means two number differs on that bit
     */
    //step2: find the bitmask tjat has 1 single bit difference
    let m = r & (-r);
    /**
     * testing that unique bit on all numbers 
     * dual numbers will have no effects on that bit
     */
    let [n1, n2] = [0, 0];
    for (let n of V) {
        if (n & m) n1 ^= n;
        else n2 ^= n;
    }
    return [n1,n2];
};