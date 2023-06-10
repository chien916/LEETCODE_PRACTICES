/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function (target, dictionary) {

    //use bitmask to generate all combinations
    let _getAbbrComb_f = (s_s) => {
        let _ret_a = [];
        for (let i_n = 0; i_n < (1 << s_s.length); ++i_n) {//for each bitmask combination
            let _s_a = [];
            for (j_n = 0; j_n < s_s.length; ++j_n) {//for each letter
                if ((i_n & (1 << j_n)) === 0) {
                    if (_s_a.length === 0 || !Number.isInteger(_s_a[_s_a.length - 1])) _s_a.push(1);
                    else ++_s_a[_s_a.length - 1];
                } else {
                    _s_a.push(s_s.charAt(j_n));
                }
            }
            _ret_a.push(_s_a.join(""));
        }
        return _ret_a;
    }
    //get all abbreviations from dictionary (element of which having same length as target)
    let _set = new Set();
    for (let _cWordFromDict_s of dictionary) {
        if (_cWordFromDict_s.length !== target.length) continue;
        for (let _cAbbrev_s of _getAbbrComb_f(_cWordFromDict_s))
            _set.add(_cAbbrev_s);
    }
    //test all abbreviations from target and add to return if not in set
    let _ret_s = null;
    for (let _cWordFromTarg of _getAbbrComb_f(target)) {
        if (_set.has(_cWordFromTarg)) continue;
        if (_ret_s === null || _cWordFromTarg.length < _ret_s.length)
            _ret_s = _cWordFromTarg;
    }
    return _ret_s;
};

console.log(minAbbreviation("apple", ["blade", "plain", "amber"]));