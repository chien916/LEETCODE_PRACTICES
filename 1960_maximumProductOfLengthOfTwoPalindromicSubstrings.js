/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
    //Manacher structure (ODD-LENGTH SUBSTRING ONLY!)
    let _mnc_a = [];
    {
        let _maxRight_n = -1;
        let _maxCenter_n = -1;
        for (let i_n = 0; i_n < s.length; ++i_n) {
            let _cR_n = 0;//current radius
            if (i_n < _maxRight_n) {
                let j_n = _maxCenter_n - (i_n - _maxCenter_n);
                _cR_n = Math.min(_mnc_a[j_n], _maxRight_n - i_n);
            }
            while (i_n - _cR_n >= 0 && i_n + _cR_n <= s.length - 1
                && s.charAt(i_n - _cR_n) === s.charAt(i_n + _cR_n))
                ++_cR_n;
            _mnc_a[i_n] = --_cR_n;
            if (i_n + _cR_n > _maxRight_n)
                _maxRight_n = (_maxCenter_n = i_n) + _cR_n;
        }
    }
    //Dynamic programming: the longest palindrome substring until index
    let dpL_a = Array(s.length).fill(1);
    let dpR_a = Array(s.length).fill(1);
    {
        let j_n = 0;//helper left iterator for dpL
        let k_n = s.length - 1;//helper right iterator for dpR
        for (let i_n = 1; i_n < s.length; ++i_n) {//rolling iterator for dpL
            let l_n = s.length - 1 - i_n;//casted rolling iterateor for dpR - combined for loop
            //loops to find the first time which the left palindromic center reaches i
            while (j_n <= s.length - 1 && j_n + _mnc_a[j_n] < i_n) ++j_n;
            //loops to find the first time which the right palindromic center reaches l
            while (k_n >= 0 && k_n - _mnc_a[k_n] > l_n) --k_n;
            //state transfer
            //i-j denotes the longer substring that includes s[i] centered at j
            dpL_a[i_n] = Math.max(dpL_a[i_n - 1], (i_n - j_n) * 2 + 1);
            dpR_a[l_n] = Math.max(dpR_a[l_n + 1], (k_n - l_n) * 2 + 1);
        }
    }
    //Concluding result from dynamic programming
    let _ret_n = 0;
    for (let i_n = 1; i_n < s.length; ++i_n) {
        _ret_n = Math.max(_ret_n, dpL_a[i_n - 1] * dpR_a[i_n]);
    }
    return _ret_n;
};