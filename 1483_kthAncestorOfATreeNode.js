/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
    const jmax = Math.floor(Math.log2(Number.MAX_SAFE_INTEGER)) + 1

    //Anc[i][j] stores the 2^(j) th ancestor of node at index i
    const _Anc = Array(n).fill().map(() => Array(jmax - 1).fill(-1))
    //get the 2^j th ancestor of node at index i
    const _Anc_at = (i, j) => {
        if (i < 0) return -1
        else if (j === 0) return parent[i]//auto cacheing
        else return _Anc[i][j]
    }
    //init
    for (let j = 0; j < jmax; ++j) {
        for (let i = 0; i < n; ++i) {
            if (j === 0) _Anc[i][j] = parent[i]
            else _Anc[i][j] = _Anc_at(_Anc_at(i, j - 1), j - 1)
        }
    }
    //stores
    this.Anc = _Anc
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
    const _Anc = this.Anc
    let curr = node
    const kmax = Math.floor(Math.log2(k)) + 1
    for (let j = 0; j <= kmax; ++j) {
        if ((k >>> j) & 1) curr = _Anc[curr][j]
        if (curr < 0) return -1
    }
    return curr
};


// let t = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2])
// console.log(t.getKthAncestor(6, 3))
/** 
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */