/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    /**
     * 观察: input size非常小,可以brute force
     * 思路: 利用bitmask来枚举所有的permutation 
     * 或者利用backtracking枚举 两个都可以
     */
    let _ret_A = new Set();
    let rec_f = (curr_A, ind_n) => {
        if (ind_n > nums.length - 1) {
            if (curr_A.length >= 2)
                _ret_A.add([...curr_A].join("_"));
            return;
        }
        if (curr_A.length === 0 || nums[ind_n] >= curr_A[curr_A.length - 1]) {
            curr_A.push(nums[ind_n]);
            rec_f(curr_A, ind_n + 1);
            curr_A.pop();
        }
        for (;ind_n + 1 <= nums.length - 1 && nums[ind_n] === nums[ind_n + 1];++ind_n) ;
        rec_f(curr_A, ind_n + 1);
    }
    rec_f([], 0);
    _ret_A = [..._ret_A].map((it_s)=>it_s.split("_").map((it_s)=>parseInt(it_s)));
    return _ret_A;
};

console.log(findSubsequences([4, 6, 7, 7]))