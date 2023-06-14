/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    //construction of segment tree structure definition [val,left,right,lInd,rInd]
    const _build_f = (arr_a, lInd_n, rInd_n) => {
        if (lInd_n === rInd_n) return [arr_a[lInd_n], null, null, lInd_n, rInd_n];//trivial case
        let rIndOfLeft_n = lInd_n + ((rInd_n - lInd_n) >> 1);
        let lIndOfRight_n = Math.min(rIndOfLeft_n + 1, rInd_n);
        let left_a = _build_f(arr_a, lInd_n, rIndOfLeft_n);
        let right_a = _build_f(arr_a, lIndOfRight_n, rInd_n);
        let sum = left_a[0] + right_a[0];
        return [sum, left_a, right_a, lInd_n, rInd_n];
    }
    const _modify_f = (segTree_a, ind_n, val_n) => {
        //case 1 (boundary) -> 
        if (segTree_a[3] === segTree_a[4] && segTree_a[3] === ind_n) segTree_a[0] = val_n;
        else {
            let midInd_n = segTree_a[3] + ((segTree_a[4] - segTree_a[3]) >> 1);
            if (ind_n <= midInd_n) _modify_f(segTree_a[1], ind_n, val_n);
            else _modify_f(segTree_a[2], ind_n, val_n);
            segTree_a[0] = segTree_a[1][0] + segTree_a[2][0];
        }
    }
    const _query_f = (segTree_a, lInd_n, rInd_n) => {
        //case 1 -> interval exact match
        if (lInd_n === segTree_a[3] && rInd_n === segTree_a[4]) return segTree_a[0];
        let midInd_n = segTree_a[3] + ((segTree_a[4] - segTree_a[3]) >> 1);//error ! >> is less priortized than +
        //case 2 -> interval only falls into left node
        if (rInd_n <= midInd_n) return _query_f(segTree_a[1], lInd_n, rInd_n);
        //case 3 -> interval only falls into right node
        else if (lInd_n > midInd_n) return _query_f(segTree_a[2], lInd_n, rInd_n);
        //case 4 -> iterval falls in both node (not exactly)
        else return _query_f(segTree_a[1], lInd_n, midInd_n)
            + _query_f(segTree_a[2], midInd_n + 1, rInd_n);//err 2
    }
    let _root_a = _build_f(nums, 0, nums.length - 1);
    this._exp_a = [_root_a, _modify_f, _query_f];
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  //  console.log(`updating ${index} ${val}`);
    this._exp_a[1](this._exp_a[0], index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let ans = this._exp_a[2](this._exp_a[0], left, right);
  //  console.log(`quering  ${left} ${right} -> ${ans}`);
    return ans;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

let test = new NumArray([0, 9, 5, 7, 3]);
test.sumRange(2, 4)

