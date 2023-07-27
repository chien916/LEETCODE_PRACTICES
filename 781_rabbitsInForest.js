/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (V_a) {
    let M_a = new Map();
    for (let n of V_a) {
        if (!M_a.has(n)) M_a.set(n, 0);
        M_a.set(n, M_a.get(n) + 1);
    }
    let a = 0;//answer
    for (let [k, v] of M_a) {
        a += Math.ceil(v / (k + 1)) * (k + 1);
    }
    return a;
};