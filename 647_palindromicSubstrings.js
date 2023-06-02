/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    //Manacher Structure for quering palindroms 
    let _ext_s = ["|"];
    let _mnc_a = [];
    for (let _s of s) _ext_s.push(_s, "|");
    let _maxRight_n = -1;
    let _maxCenter_n = -1;
    for (let i_n = 0; i_n < _ext_s.length; ++i_n) {
        let _cR_n = 0;//current radius NOT including center
        if (i_n < _maxRight_n) {
            let j_n = _maxCenter_n - (i_n - _maxCenter_n);
            //j_n <--r--> maxCenter <--r--> i_n
            _cR_n = Math.min(_mnc_a[j_n], _maxRight_n - i_n);
        }
        while (i_n - _cR_n >= 0 && i_n + _cR_n <= _ext_s.length - 1 && _ext_s[i_n - _cR_n] === _ext_s[i_n + _cR_n]) ++_cR_n;
        _mnc_a[i_n] = --_cR_n;//put it back to the last right stage
        if (i_n + _cR_n > _maxRight_n) _maxRight_n = (_maxCenter_n = i_n) + _cR_n;
    }
    //main
    let _ret_n = 0;
    for (let _n of _mnc_a) {
        _ret_n += Math.floor((_n + 1) / 2);
    }
    return _ret_n;
};

console.log(countSubstrings("aaa"));