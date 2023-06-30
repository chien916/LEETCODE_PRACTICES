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
 * @return {number}
 */
var maxProduct = function (R) {
    //let C = [];
    let sum_ent = 0n;
    let M_post = new Map();
    let dfs = (T, i) => {
        sum_ent = sum_ent + BigInt(T.val);
        let _sum_post = BigInt(T.val);
        if (T.left) _sum_post += dfs(T.left, i * 2 + 1,);
        if (T.right) _sum_post += dfs(T.right, i * 2 + 2);
        M_post.set(i, _sum_post);
        //console.log(T.val + " [post] " + _sum_post);
        return _sum_post;
    }
    if (R) dfs(R, 0);
    //
    let ans = 0n;
    let dfs2 = (T, i) => {
        for (let [i_n, _T] of [[i * 2 + 1, T.left], [i * 2 + 2, T.right]]) {
            if (!_T) continue;
            let s1 = M_post.get(i_n);
            let s2 = sum_ent - s1;
            let prod = s1 * s2;
            console.log(`cutting ${_T === T.left ? "left" : "right"} from ${T.val} \ngenerates s1=${s1} * s2=${s2}} = ${prod}`)
            if (prod > ans) ans = prod;
            dfs2(_T, i_n);
        }
    }
    if (R) dfs2(R, 0);
    console.log(sum_ent);
    let m = BigInt(1000000007);
    return Number(ans % m);
};