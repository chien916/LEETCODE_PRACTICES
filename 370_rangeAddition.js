/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
    //segment tree structure definition
    //[val,leftNode,rightNode,lInd,rInd,lazy]
    //val -> increment
    let _build_f = (lInd_n, rInd_n) => {
        if (lInd_n === rInd_n) return [0, null, null, lInd_n, rInd_n];
        let rIndOfLeft_n = lInd_n + ((rInd_n - lInd_n) >> 1);
        let lIndOfRight_n = Math.min(rIndOfLeft_n + 1, rInd_n);
        let leftNode_a = _build_f(lInd_n, rIndOfLeft_n);
        let rightNode_a = _build_f(lIndOfRight_n, rInd_n);
        return [0, leftNode_a, rightNode_a, lInd_n, rInd_n];
    }
    let _incr_f = (sTree_a, lInd_n, rInd_n, incr_n) => {
        //case 1 : range matches exactly
        if (lInd_n === sTree_a[3] && rInd_n === sTree_a[4]) sTree_a[0] += incr_n;
        //case 2 : range matches NONE (WILL NEVER HAPPEN)
        //else if (lInd_n < sTree_a[3] || rInd_n > sTree_a[4]) return;
        //case 3 : range matches PARTIALLY
        else {
            //update cache
            if (sTree_a[3] < sTree_a[4] && sTree_a[0] !== 0) {
                sTree_a[1][0] += sTree_a[0];
                sTree_a[2][0] += sTree_a[0];
                sTree_a[0] = 0;
            }
            //process
            let midInd_n = (sTree_a[3] + ((sTree_a[4] - sTree_a[3]) >> 1));
            if (rInd_n <= midInd_n) _incr_f(sTree_a[1], lInd_n, rInd_n, incr_n);
            else if (lInd_n >= midInd_n + 1) _incr_f(sTree_a[2], lInd_n, rInd_n, incr_n);
            else {
                _incr_f(sTree_a[1], lInd_n, midInd_n, incr_n);
                _incr_f(sTree_a[2], midInd_n + 1, rInd_n, incr_n);
            }
        }
    }
    let _dfs_f = (sTree_a, ret_a) => {
        if (sTree_a[3] === sTree_a[4]) ret_a[sTree_a[3]] = sTree_a[0];
        else {
            //update cache
            if (sTree_a[3] < sTree_a[4] && sTree_a[0] !== 0) {
                sTree_a[1][0] += sTree_a[0];
                sTree_a[2][0] += sTree_a[0];
                sTree_a[0] = 0;
            }
            _dfs_f(sTree_a[1], ret_a);
            _dfs_f(sTree_a[2], ret_a);
        }
    }
    //construct tree from length
    let root_a = _build_f(0, length - 1);
    for (let update_a of updates)
        _incr_f(root_a, update_a[0], update_a[1], update_a[2]);
    let _ret_a = Array(length).fill(0);
    _dfs_f(root_a, _ret_a);
    return _ret_a;
};

console.log(getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]));