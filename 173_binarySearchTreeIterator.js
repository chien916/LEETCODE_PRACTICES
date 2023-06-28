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
 */
var BSTIterator = function (R) {
    this.C = [];
    let dfs = (T) => {
        if (T.left) dfs(T.left);
        this.C.push(T.val);
        if (T.right) dfs(T.right);
    }
    if (R) dfs(R);
    this._i = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    if (this.hasNext()) return this.C[this._i++];
    else return null;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return (this._i< this.C.length);
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */