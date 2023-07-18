/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let c = 0;
    let s = 0;
    for (let i = 0; i < 32; ++i) {
        let _a = a & (1 << i);
        let _b = b & (1 << i);
        let _c = c & (1 << i);
        let __s = ((_a ^ _b ^ _c) >>> i);
        let __c = (((_a & _b) | (_c & (_a ^ _b))) >>> i);
        s |= (__s << i);
        c |= (__c << (i + 1));
        let k = 0;
    }
    return s;
};

console.log(getSum(2, 3))