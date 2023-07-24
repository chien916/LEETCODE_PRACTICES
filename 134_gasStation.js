/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (V_g, V_c) {
    let [s_g, s_c] = [0, 0];
    for (let i = 0; i < V_g.length; ++i) {
        s_g += V_g[i];
        s_c += V_c[i];
    }
    if (s_g < s_c) {
        //console.log("pre")
        return -1;
    }

    let ans = null;
    s_g = 0;
    for (let i = 0; i < V_g.length; ++i) {
        if (ans === null) ans = i;
        s_g = s_g + V_g[i] - V_c[i];
        if (s_g < 0) {
            ans = null;
            s_g = 0;
        }
    }

    return ans === null ? -1 : ans;
};

// canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])
//canCompleteCircuit([2, 3, 4], [3, 4, 3])