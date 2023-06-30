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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function (R, t, k) {
    /**
     * [0,5,10,15,20]
     * 
     * Theorm: Maintaining a sorted queue is good for 
     * k closest values to t, as the difference of
     * front and back values are guaranteed to be smaller
     * than that of middle values. 
     * 
     * Just look at the front value an see if shifting is needed.
     */
    //linked list 
    let Q = [];
    //dfs in-order traversal on BST
    let running = true;
    let dfs = (T) => {
        if (running && T.left) dfs(T.left);
        //add to linked list
        if (Q.length < k) Q.push(T.val);
        else if (Math.abs(T.val - t) < Math.abs(Q[0] - t)) {
            Q.shift();
            Q.push(T.val);
        } else running = false;
        console.log(Q);
        if (running && T.right) dfs(T.right);
    }
    if (R) dfs(R);
    return Q;
};