
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (R) {
    let dfs = (T, inc, dec, _p = false) => {
        let [inc_, dec_] = [inc, dec];
        if (_p) { console.log(`dfs = (${T.val}, ${inc}, ${dec})`) }
        for (let _T of [T.left, T.right]) {
            if (_T) {

                if (_T.val - T.val === 1) {
                    if (_p) console.log(`inc ${_T.val} - ${T.val} === 1`)
                    inc_ = Math.max(inc_, dfs(_T, inc + 1, NaN, _p)[0]);
                }
                if (T.val - _T.val === 1) {
                    if (_p) console.log(`dec ${_T.val} - ${T.val} === 1`)
                    dec_ = Math.max(dec_, dfs(_T, NaN, dec + 1, _p)[1]);
                }
            }
        }
        if (_p) { console.log(`return ${[inc_, dec_]}`) }
        return [inc_, dec_];
    }
    //answer formation
    let ans = 0;
    let dfs2 = (T) => {
        let _Ans = dfs(T, 1, 1);
     //   console.log(`Using ${T.val} generates ${_Ans}`)
        ans = Math.max(ans, _Ans[0] + _Ans[1] - 1);
        if (T.left) dfs2(T.left);
        if (T.right) dfs2(T.right);
    }
    if (R) dfs2(R);
    return ans;
};

// //二叉树类题型结构定义
// let util = require("./_util");
// let TreeNode = util.TreeNode;
// let formBinaryTree = util.formBinaryTree;
// //let printBinaryTree = util.printBinaryTree;

// let T = (formBinaryTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]));
// console.log(longestConsecutive(T));