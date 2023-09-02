/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (V) {
    //trivial case
    let b_trivial = true;
    for (let n of V) {
        if (n === 0) b_trivial = false;
    }
    if (b_trivial) return V.length - 1;
    //

    /**
     * [0,3,0,2,0,1] for exp.2
     */
    let V_ = [];
    for (let i = 0; i < V.length; ++i) {
        if (V[i] === 0) V_.push(0);
        else {
            //sliding window
            let i_;
            for (i_ = i + 1; i_ < V.length; ++i_) {
                if (V[i_] === 0) break;
            }
            let l = i_ - i;
            V_.push(l);
            i = i_ - 1;
        }
    }
   // console.log(V_)

    //answer formation
    let a = 0;
    for (let i = 0; i < V_.length; ++i) {
        if (V_[i] !== 0) continue;
        let _a = 0;
        if (i - 1 > -1) _a += V_[i - 1];
        if (i + 1 < V_.length) _a += V_[i + 1];
        a = Math.max(a, _a);
    }
    return a;

};