/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {

    /**
     * the question is basically asking for the 
     * longest palindrome substring strictly 
     * starting from left most corner
     */
    //Manacher Structure 
    let _mnc_a = [];
    {
        let _ext_s = ["|"];
        for (let _s of s) _ext_s.push(_s, "|");
        let _maxR_n = -1;
        let _maxC_n = -1;
        for (let i_n = 0; i_n < _ext_s.length; ++i_n) {
            let _cR_n = 0;
            if (_maxR_n > i_n) {
                //optimizing initial radius trials when a previous palindrom substring
                //includes the current element
                let j_n = _maxC_n - (i_n - _maxC_n);
                _cR_n = Math.min(_mnc_a[j_n], _maxR_n - i_n);
            }
            //find the correct radius for the current element
            //[expanding around the center until not a palindrom]
            while (i_n - _cR_n >= 0 && i_n + _cR_n <= _ext_s.length - 1
                && _ext_s[i_n - _cR_n] === _ext_s[i_n + _cR_n])
                ++_cR_n;
            _mnc_a[i_n] = --_cR_n;
            //update max
            if (i_n + _cR_n > _maxR_n) _maxR_n = (_maxC_n = i_n) + _cR_n;
        }
    }
    //main
    let lengthOfLongestPalind_n = 0;
    for (let i_n = 1; i_n < _mnc_a.length; ++i_n) {
        //valid only when strictly sticking to left border
        if (_mnc_a[i_n] === i_n)
            lengthOfLongestPalind_n = Math.floor((_mnc_a[i_n] * 2 + 1) / 2);
    }
    //return string formation
    let _ret_s = s.substring(lengthOfLongestPalind_n);
    _ret_s = [..._ret_s].reverse().join("") + s.substring(0, lengthOfLongestPalind_n) + _ret_s;
    return _ret_s;
};
shortestPalindrome("a")