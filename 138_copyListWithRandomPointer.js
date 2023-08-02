/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (H) {
    let M = [];
    for (let N = H; N; N = N.next) {
        M.push([N.val, N, null]);
        N.val = M.length - 1;
    }
    let H_ = new Node(Infinity, null, null);
    let H_b = H_;
    for (let i = 0; i < M.length; ++i) {
        M[i][2] = H_ = H_.next = new Node(M[i][0], null, null);
    }
    for (let i = 0; i < M.length; ++i) {
        if (M[i][1].random)
            M[i][2].random = M[M[i][1].random.val][2];
    }
    return H_b.next;
};