/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
    let conn_A = Array(parent.length).fill().map(() => []);
    for (let i_n = 0; i_n < parent.length; ++i_n) {
        let to_n = parent[i_n];
        if (to_n === -1) continue;
        conn_A[i_n].push(to_n);
        conn_A[to_n].push(i_n);
    }

    let _ret_n = 0;
    let dfs_f = (cI_n,pI_n) => {
        let maExtL_A = [0, 0];
        for (let it_n of conn_A[cI_n]) {
            if (it_n === pI_n ) continue;
            if(s.charCodeAt(it_n) === s.charCodeAt(cI_n)){
                dfs_f(it_n, cI_n);
            }
            else{
                maExtL_A.push(cI_n === -1
                    ? 0
                    : dfs_f(it_n, cI_n));
                maExtL_A.sort((a_n, b_n) => a_n - b_n);
                maExtL_A.shift();
            }
        }
        _ret_n = Math.max(_ret_n, maExtL_A[0] + maExtL_A[1] + 1);
        return maExtL_A[1] + 1;
    }
    dfs_f(0,-1);
    return _ret_n;
};

console.log(longestPath([-1,0,1], "aab"))
