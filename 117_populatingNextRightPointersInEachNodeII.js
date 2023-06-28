/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (T) {
    let Q = [];
    if(T) Q.push([T, 1]);//bfs driver
    while (Q.length > 0) {
        let [_T, h] = Q.shift();
        if (Q.length > 0 && Q[0][1] === h) _T.next = Q[0][0];
        if (_T.left) Q.push([_T.left, h + 1]);
        if (_T.right) Q.push([_T.right, h + 1]);
    }
    return T;
};