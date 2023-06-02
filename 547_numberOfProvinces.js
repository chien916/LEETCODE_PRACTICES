/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    //union find structrue driver
    let _father = new Map();
    let _findFather_f = (_n) => {
        if (_father.get(_n) !== _n)
            _father.set(_n, _findFather_f(_father.get(_n)));
        return _father.get(_n);
    };
    let _union_f = (i_n, j_n) => {
        //must be called after findFather(), by means of comparison
        [i_n, j_n] = [_father.get(i_n), _father.get(j_n)];
        if (i_n < j_n) _father.set(i_n, j_n);
        else _father.set(j_n, i_n);
    };
    //init union find
    for (let i_n = 0; i_n < isConnected.length; ++i_n)
        _father.set(i_n, i_n);//init all fathers to be themselves


    //process union find
    for (let i_n = 0; i_n < isConnected.length; ++i_n)
        for (let j_n = 0; isConnected.length > 0 && j_n < isConnected[0].length; ++j_n)
            if (i_n !== j_n && isConnected[i_n][j_n] === 1 && _findFather_f(i_n) !== _findFather_f(j_n))
                _union_f(i_n, j_n);

    //count unions
    let _set = new Set();
    for (let i_n = 0; i_n < isConnected.length; ++i_n)
        _set.add(_findFather_f(i_n));

    return _set.size;

};