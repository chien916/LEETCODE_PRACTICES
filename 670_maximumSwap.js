/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (n=2736) {
    let N = [...n.toString()].map(n => parseInt(n));
    let l_n = N.length;
    let N_max = Array(l_n).fill(null);
    for (let [i, _i_max] = [l_n-1, null]; i > -1; --i) {
        if (_i_max !== null && N[i] < N[_i_max]) N_max[i] = _i_max;
        if (_i_max === null || N[i] > N[_i_max]) _i_max = i;
    }
    for (let i = 0; i < l_n; ++i) {
        if (N_max[i] !== null) {
            let h = N[i];
            N[i] = N[N_max[i]];
            N[N_max[i]] = h;
            return parseInt(N.join(""));
        }
    }
    return n;

};

console.log(maximumSwap())