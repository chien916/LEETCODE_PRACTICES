/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (V) {
    let [dp_min, dp_max] = [V[0], V[0]];
    let a = dp_max;
    for (let i = 1; i < V.length; ++i) {
        let v = V[i];
        let _dp_1 = dp_min * v;
        let _dp_2 = dp_max * v;
        dp_min = Math.min(_dp_1, _dp_2, v);
        dp_max = Math.max(_dp_1, _dp_2, v);
        a = Math.max(a, dp_max);
    }
    return a;

};