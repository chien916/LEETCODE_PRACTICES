/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (V) {
    let C = new Map();
    let fact = (n) => {
        let k = `fact(${n})`;
        if (!C.has(k)) {
            C.set(k, (n < 2) ? n : (n * fact(n - 1n)));
        }
        return C.get(k);
    }
    let comb = (n, r) => {
        return fact(n) / (fact(r) * fact(n - r));
    }


};