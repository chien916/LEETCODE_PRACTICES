
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (v_1, v_2) {
    let V_1 = v_1.split(".").map((v) => parseInt(v));
    let V_2 = v_2.split(".").map((v) => parseInt(v));
    if (V_1.length < V_2.length) V_1 = V_1.concat(Array(V_2.length - V_1.length).fill(0));
    else if (V_1.length > V_2.length) V_2 = V_2.concat(Array(V_1.length - V_2.length).fill(0));
    for (let i = 0; i < V_1.length; ++i) {
        if (V_1[i] > V_2[i]) return 1;
        else if (V_1[i] < V_2[i]) return -1;
    }
    return 0;
};