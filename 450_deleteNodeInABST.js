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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (T, v) {
    let H = new TreeNode(NaN, T, null)//top helper node for return purposes
    //step 1 -> Find the node mapping to v
    let [V, V_p, isLeft] = [T, H, true];
    while (V && (v - V.val))
        V = (isLeft = (v < (V_p = V).val)) ? V.left : V.right
    if (!V) return T//no node matching the target value is found // boundary case
    //step 2 -> Determine cases
    if (!V.left && !V.right) {
        //case 1: no left nor right child
        if (isLeft) V_p.left = null
        else V_p.right = null
    } else if (!V.right) {
        //case 2: V has left child only
        if (isLeft) V_p.left = V.left
        else V_p.right = V.left
    } else if (!V.left) {
        //case 3: V has right child only
        if (isLeft) V_p.left = V.right
        else V_p.right = V.right
    } else {
        //case 4: V has both left and right children
        //find the leftmost child from the right child of V
        let _H = new TreeNode(NaN, V.right, null)
        let [_V, _V_p] = [V.right, _H];
        while (_V.left) _V = (_V_p = _V).left
        V.val = _V.val
        _V_p.left = _V.right//err1: no left promised, but not right!!!
        V.right = _H.left
    }
    return H.left
};