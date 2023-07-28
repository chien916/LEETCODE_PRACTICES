/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (V_e) {
    let l_e = V_e.length;
    let Q = [];
    V_e.sort((A, B) => (A[0] === B[0]) ? (-A[1] + B[1]) : (A[0] - B[0]));
    for (let E of V_e) {
        if (Q.length === 0 || E[1] > Q[Q.length - 1][1]) Q.push(E);
        else {
            let [i_l, i_r] = [0, Q.length - 1];
            while (i_l < i_r) {
                let i_m = i_l + ((i_r - i_l) >>> 1);
                if (Q[i_m][1] < E[1]) i_l = i_m + 1;
                else i_r = i_m;
            }
            Q[i_l] = E;
        }
    }
    return Q.length;
};

console.log(maxEnvelopes([[46, 89], [50, 53], [52, 68], [72, 45], [77, 81]]))