/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = [...s];//spread into char array
    k = Math.min(k, s.length);//handles boundary case where k is larger than s.length
    for (let [l_n, r_n] = [0, k - 1]
        ; l_n < s.length
        ; [l_n, r_n] = [l_n + 2 * k, Math.min(l_n + 3 * k - 1, s.length - 1)]) {
        for (let [i_n, j_n] = [l_n, r_n]; i_n < j_n; [i_n, j_n] = [i_n + 1, j_n - 1]) {
            [s[i_n], s[j_n]] = [s[j_n], s[i_n]];
        }
    }
    return s.join("");
};


console.log(reverseStr("abcdefg",2));