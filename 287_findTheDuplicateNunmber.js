/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let [ans_lo, ans_hi] = [1, nums.length]
    while (ans_lo < ans_hi) {
        let ans_mid = ans_lo + ((ans_hi - ans_lo + 0) >>> 1)
        //for 1,2,3,4,5 guess 3 generates 3 -> right answer lies above 3
        //for 1,1,2,3,4 guess 3 generates 4 -> right answer lies below 3
      
        if (nums.reduce((p, v) => (v <= ans_mid) ? (p + 1) : p,0) > ans_mid) ans_hi = ans_mid
        else ans_lo = ans_mid + 1
    }
    return ans_lo
};