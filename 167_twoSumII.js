/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (V, t) {
    for (let [l, r] = [0, V.length - 1]; l < r;) {
        while (l < r - 1 && V[l] + V[r - 1] >= t) --r;
        if (V[l] + V[r] === t) return [l + 1, r + 1];
        l++;
    }
};

console.log(twoSum([0, 0, 3, 4], 0))