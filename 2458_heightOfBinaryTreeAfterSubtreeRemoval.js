/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (R, Q) {
    /**
     * h_u : height of node counting from top (including itself)
     * h_b : height of node counting from bottom (including itself)
     * M: [h_u] -> all nodes with h_u (val: integer val T.val)
     * M_hb:[T.val] -> h_b 
     * M_hu:[T.val] -> h_u
     */
    let [M, M_hb, M_hu] = [new Map(), new Map(), new Map()];
    let dfs = (_T, _h_u) => {
        let _h_b = 1//to return
        if (_T.left) _h_b = Math.max(_h_b, dfs(_T.left, _h_u + 1) + 1);
        if (_T.right) _h_b = Math.max(_h_b, dfs(_T.right, _h_u + 1) + 1);
        //fill map
        if (!M.has(_h_u)) M.set(_h_u, []);
        M.get(_h_u).push(_T.val);
        M_hb.set(_T.val, _h_b);//each _T.val is unique
        M_hu.set(_T.val, _h_u);//each _T.val is unique
       // console.log(`${_T.val} H_b=${_h_b} H_u=${_h_u}`);
        return _h_b;
    }
    if (R) dfs(R, 1);
    //sort vals in M by values of h_b
    for (let [k, V] of M) {
        V.sort((t_a, t_b) => M_hb.get(t_a) - M_hb.get(t_b));
       // console.log(`S: H_u(${k}) : ${V}`);
    }
    //process queries
    let Ans = []
    for (let q of Q) {
        let [_h_u, _h_b] = [M_hu.get(q), M_hb.get(q)];
        let C = M.get(_h_u)
        //C.splice(C.indexOf(q), 1);//remove the current element from the map
        if (C.length === 1) Ans.push(_h_u - 2);//no query on root is given
        else {
          //  console.log(C)
            let i_c_ = C.length - 1;
            if (C[i_c_] === q) --i_c_;
            Ans.push((_h_u - 1) + (M_hb.get(C[i_c_]) - 1));
        }
    }
    return Ans;
};