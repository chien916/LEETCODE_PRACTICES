/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (V_n) {
    let l_n = V_n.length;
    for (let i = 0; i < l_n; ++i) {
        while (V_n[i] - 1 !== i && V_n[V_n[i] - 1] !== V_n[i]) {
            let v_1 = V_n[i];
            let v_2 = V_n[v_1 - 1];
            V_n[i] = v_2;
            V_n[v_1 - 1] = v_1;
        }
    }
    let A = [];
    for (let i = 0; i < l_n; ++i) {
        if (V_n[i]-1 !== i) A.push(V_n[i]);
    }
    return A;
};

let p = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(p));