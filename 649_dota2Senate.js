/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (T_s) {
    let [V_r, V_d] = [[], []];
    for (let i = 0; i < T_s.length; ++i) {
        if (T_s.charAt(i) === "R") V_r.push(i);
        if (T_s.charAt(i) === "D") V_d.push(i);
    }
    let i_l = V_r.length + V_d.length;
    let [i_r, i_d] = [0, 0];
    while (i_r < V_r.length && i_d < V_d.length) {
        if (V_r[i_r] < V_d[i_d]) {
            V_r.push(i_l++);
        } else {//V_r[i_r] > V_d[i_d] (they can never be equal)
            V_d.push(i_l++);
        }
        ++i_r;
        ++i_d;
    }
    if (i_r < V_r.length) return "Radiant";
    else return "Dire";
};

console.log(predictPartyVictory("RDD"))