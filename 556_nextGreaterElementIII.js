/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    let V_n = n.toString().split("").map((v) => parseInt(v));
    let l_n = V_n.length;
    for (let i = l_n - 2; i > -1; --i) {
        if (V_n[i] < V_n[i + 1]) {
            for (let j = l_n - 1; j > i; --j) {
                if (V_n[j] > V_n[i]) {
                    let h = V_n[i];
                    V_n[i] = V_n[j];
                    V_n[j] = h;
                    let a = parseInt(V_n.slice(0, i + 1).concat(V_n.slice(i + 1).sort((a, b) => a - b)).join(""));
                    if (a > (2 ** 31 - 1)) return -1;
                    else return a;
                }
            }
        }
    }
    return -1;
};

