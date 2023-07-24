/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (V) {
    let C = [[null, 0], [null, 0]];
    for (let n of V) {
        if (C[0][0] === n) ++C[0][1];
        else if (C[1][0] === n) ++C[1][1];
        else if (!C[0][1]) C[0] = [n, 1];
        else if (!C[1][1]) C[1] = [n, 1];
        else {
            --C[0][1];
            --C[1][1];
        }
    }

    C[0][1] = C[1][1] = 0;
    for (let n of V) {
        for (let _C of C) {
            if (n === _C[0]) ++_C[1];
        }
    }

    let A = [];
    let b = Math.floor(V.length / 3);
    for (let _C of C) {
        if (_C[1] > b) A.push(_C[0]);
    }
    return A;
};

console.log(majorityElement([2, 1, 1, 3, 1, 4, 5, 6]))