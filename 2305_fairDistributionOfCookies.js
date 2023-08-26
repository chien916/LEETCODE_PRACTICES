/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (V, k) {
    let l_v = V.length;
    let l_bits_k = Math.floor(Math.log2(k - 1) + 1);
    let l_bits_c = l_v
    //console.log(l_bits_k, l_bits_c)
    let c_max = Infinity;
    for (let i = 0; i <= (1 << (l_bits_k * l_bits_c)) - 1; ++i) {
        //console.log(i.toString(2).padStart(l_bits_k * l_bits_c, '0'));
        //check validity
        let b_valid = true;
        for (let [j, i_] = [0, i]; b_valid && j < l_v; ++j) {
            if ((i_ & ((1 << l_bits_k) - 1)) >= k) b_valid = false;
            i_ >>>= (l_bits_k);
        }
        if (!b_valid) continue;
        //calculate how many cookies do each person get based on bitwise enumerations
        let C = Array(k).fill(0);
        for (let [j, i_] = [0, i]; j < l_v; ++j) {
            C[i_ & ((1 << l_bits_k) - 1)] += V[j];
            i_ >>>= (l_bits_k);
        }
        //console.log(C)
        //retrive maxium cookies a person can get a.k.a. unfairness
        c_max = Math.min(c_max, Math.max(...C));
    }
    return c_max;
};