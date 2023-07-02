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
var longestConsecutive = function (R) {
    let dfs = (T, inc, dec, _m = [[], []], _f = 1) => {
        for (let _T of [T.left, T.right]) {
            if (_T) {
                if (_T.val - T.val === 1) {
                    _m[0].push(_T.val)
                    inc = Math.max(inc, dfs(_T, inc + 1, NaN, _m, 0)[0]);
                }
                if (T.val - _T.val === 1) {
                    _m[1].push(_T.val);
                    dec = Math.max(dec, dfs(_T, NaN, dec + 1, _m, 0)[1]);
                }
            }
        }
        if (_f) {
            console.log(_m[0].reverse().join("->") + " " + _m[1].join("->"))
        }
        return [inc, dec];
    }
    //answer formation
    let ans = 0;
    let dfs2 = (T) => {
        let _Ans = dfs(T, 1, 1);
        console.log(`Using ${T.val} generates ${_Ans}`)
        ans = Math.max(ans, _Ans[0] + _Ans[1] - 1);
        if (T.left) dfs2(T.left);
        if (T.right) dfs2(T.right);
    }
    if (R) dfs2(R);
    return ans;
};