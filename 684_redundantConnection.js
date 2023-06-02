/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    //array-based disjoint set structure definition
    _e2father_A = edges.map((_, ind_n) => ind_n);
    _find_f = (ind_n) => {
        if (_e2father_A[ind_n] === ind_n) return ind_n;
        else return (_e2father_A[ind_n] = _find_f(_e2father_A[ind_n]));
    }
    _union_f = (i_n, j_n) => _e2father_A[_find_f(i_n)] = _find_f(j_n);
    _equal_f = (i_n, j_n) => _find_f(i_n) === _find_f(j_n);
    //main
    let _ret_n = -1;
    for (let i_n = 0; i_n < edges.length; ++i_n) {
        if (_equal_f(edges[i_n][0], edges[i_n][1])) _ret_n = i_n;
        else _union_f(edges[i_n][0], edges[i_n][1]);
    }
    return edges[_ret_n];
};

console.log(findRedundantConnection([[1,2],[1,3],[2,3]]));