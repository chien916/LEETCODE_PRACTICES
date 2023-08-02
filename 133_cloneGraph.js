/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (N) {
    let M = new Map();//neighors map : id,[neighbors id]
    let S = new Map();//storage -> id->cloned Node
    //bfs
    let Q = [];
    let V = new Set();//visited
    if (N) Q.push(N);
    else return null;//boundary case
    while (Q.length) {
        let N = Q.shift();
        V.add(N.val);//mark as visited
        //memorize neighbors as pure id
        M.set(N.val, []);
        for (let B of N.neighbors) {
            M.get(N.val).push(B.val);//add to neightbos map
            if (V.has(B.val)) continue;
            Q.push(B);//add to bfs queue
        }
        //create cloned node
        S.set(N.val, new Node(N.val, []));
        //add neighbors later
    }
   // console.log([...M])
    //assign neighbor
    for (let [n_id, B] of M) {
        let N = S.get(n_id);
        for (let n_b of B) {
            N.neighbors.push(S.get(n_b));
        }
    }
    //return head node
    return S.get(N.val);
};