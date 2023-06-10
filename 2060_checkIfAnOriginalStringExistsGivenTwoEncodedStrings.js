/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function (s1, s2) {
    let _isNumberAt_f = (s_s, ind_n) => {
        if (!(ind_n >= 0 && ind_n <= s_s.length - 1)) return false;//invalid index
        let _n = s_s.charCodeAt(ind_n);
        if (_n >= "0".charCodeAt(0) && _n <= "9".charCodeAt(0)) return true;
        else return false;
    }
    let _cmpAt_f = (i1_n, i2_n) => {
        if (!(i1_n >= 0 && i1_n <= s1.length - 1) || !(i2_n >= 0 && i2_n <= s2.length - 1)) return false;
        return s1.charCodeAt(i1_n) === s2.charCodeAt(i2_n);
    }

    let _cache = new Map();
    let _dfs_f = (i1_n, i2_n, mat1_n, mat2_n) => {
        let cacheKey_s = `${i1_n}|${i2_n}|${mat1_n}|${mat2_n}`;
        if (_cache.has(cacheKey_s)) return _cache.get(cacheKey_s);
        //matchers offset
        while (mat1_n > 0 && mat2_n > 0) {
            --mat1_n;
            --mat2_n;
        }
        //use matcher to match character
        while (mat1_n > 0 && !_isNumberAt_f(s2, i2_n)) {
            //if (!_cmpAt_f(i1_n , i2_n )) return false;
            --mat1_n;
            ++i2_n;
        }
        while (mat2_n > 0 && !_isNumberAt_f(s1, i1_n)) {
            //if (!_cmpAt_f(i1_n , i2_n )) return false;
            --mat2_n;
            ++i1_n;
        }
        //use character to match character
        while (!_isNumberAt_f(s1, i1_n) && !_isNumberAt_f(s2, i2_n)) {
            if (i1_n === s1.length && i2_n === s2.length)
                return _cache.set(cacheKey_s, true).get(cacheKey_s);
            if (!_cmpAt_f(i1_n, i2_n))
                return _cache.set(cacheKey_s, false).get(cacheKey_s);
            ++i1_n;
            ++i2_n;
        }
        //determine matcher
        let args1_a = [];
        if (!_isNumberAt_f(s1, i1_n)) args1_a.push([i1_n, 0]);
        let args2_a = [];
        if (!_isNumberAt_f(s2, i2_n)) args2_a.push([i2_n, 0]);

        for (let [i_n, stop_a] = [0, [false, false]]; i_n < 3; ++i_n) {
            if (!stop_a[0] && _isNumberAt_f(s1, i1_n + i_n))
                args1_a.push([i1_n + i_n + 1, parseInt(s1.substring(i1_n, i1_n + i_n + 1))]);
            else stop_a[0] = true;
            if (!stop_a[1] && _isNumberAt_f(s2, i2_n + i_n))
                args2_a.push([i2_n + i_n + 1, parseInt(s2.substring(i2_n, i2_n + i_n + 1))]);
            else stop_a[1] = true;
        }
        //iterate to the next dfs based on args
        for (let arg1_a of args1_a)
            for (let arg2_a of args2_a)
                if (_dfs_f(arg1_a[0], arg2_a[0], arg1_a[1] + mat1_n, arg2_a[1] + mat2_n))
                    return _cache.set(cacheKey_s, true).get(cacheKey_s);
        return _cache.set(cacheKey_s, false).get(cacheKey_s);
    }

    //main
    return _dfs_f(0, 0, 0, 0);
};

console.log(possiblyEquals("l123e", "44"));