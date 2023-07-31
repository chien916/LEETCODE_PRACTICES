
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
var connect = function (R) {
    let Q = [];
    let i = 0;
    if (R) Q.push([R, 0]);
    while (i < Q.length) {
        if (Q[i][0].left) Q.push([Q[i][0].left, Q[i][1] + 1]);
        if (Q[i][0].right) Q.push([Q[i][0].right, Q[i][1] + 1]);
        ++i;
    }
    //console.log(Q.map(V => `${V[0].val}|${V[1]}`));
    for (let i = 0; i < Q.length - 1; ++i) {
        if (Q[i][1] === Q[i + 1][1]) Q[i][0].next = Q[i + 1][0];
    }
    return R;
};