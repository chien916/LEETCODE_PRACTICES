/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
    let _char2ind = new Map();
    for (let i_n = 0; i_n < s.length; ++i_n) {
        if (!_char2ind.has(s.charAt(i_n))) _char2ind.set(s.charAt(i_n), []);
        _char2ind.get(s.charAt(i_n)).push(i_n);
    }

    let _p_a = Array(s.length).fill(-1);
    let _n_a = Array(s.length).fill(s.length);
    for (let [_, val_a] of _char2ind) {
        for (let i_n = 1; i_n < val_a.length; ++i_n)
            _p_a[val_a[i_n]] = val_a[i_n - 1];
        for (let ri_n = val_a.length - 2; ri_n >= 0; --ri_n)
            _n_a[val_a[ri_n]] = val_a[ri_n + 1];
    }

    let _ret_n = 0;
    for (let i_n = 0; i_n < s.length; ++i_n) {
        _ret_n += (i_n - _p_a[i_n]) * (_n_a[i_n] - i_n);
    }
    return _ret_n;
};

console.log(uniqueLetterString("LEETCODE"));