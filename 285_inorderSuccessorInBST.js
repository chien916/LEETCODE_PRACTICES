/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @Param {TreeNode} root
 * @Param {TreeNode} P
 * @return {TreeNode}
 */
var inorderSuccessor = function (T, P) {
    let _leftdfs = (T) => {
        if (T.left) return _leftdfs(T.left)
        else return T
    }
    //search
    let _search = (T, P, T_, H) => {
        if ((!H || T.val < H.val) && T.val > P.val) H = T
        if (P.val === T.val) {
            let _H = null
            if (T.right) _H = _leftdfs(T.right)
            if (!_H || H && _H.val > H.val) return H
            else return _H
        }
        else if (T.left && P.val < T.val) return _search(T.left, P, T, H)
        else if (T.right && P.val > T.val) return _search(T.right, P, T, H)
        console.log("impossible")
    }
    return _search(T, P, null, null)
};