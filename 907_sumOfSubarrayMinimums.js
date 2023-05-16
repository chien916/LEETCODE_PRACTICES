/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    let incrStack_A = [];
    let sum_n = 0;
    /**
     * dp array represents the Σ(arr[n:i]) where n = 0:i
     * this is NOT all subarrays from 0 to i
     * dp[i] and dp[i-1] differs in all subarrays contains the new element arr[i]
     * dp[i] =   arr[i] * 1 -> sum of subarrays mins which only contains the current element -> curr ele is the smallest
     *          + arr[i] * (i-1-n) -> sum of subarrays mins which the current element is minimum element
     *          + dp[n] -> sum of subarray mins which the previous smaller is minimum element
     * 
     * where "n" is the index of the previous smaller element, can be found from monotonically increasing stack
     */
    let dp_A = [];
    const MOD_N = 1e9+7;
    for (let i_n = 0; i_n < arr.length; ++i_n) {
        //process monotonically increasing stack -> index of previous smaller
        while (incrStack_A.length > 0 && arr[i_n] <= arr[incrStack_A[incrStack_A.length - 1]]) {
            incrStack_A.pop();
        }
        //dp state transfer
        let n_n = incrStack_A.length > 0 ? incrStack_A[incrStack_A.length - 1] : -1;
        dp_A[i_n]
            = ((arr[i_n] * (i_n - n_n)) % MOD_N
                + ((n_n >= 0) ? dp_A[n_n] : 0)) % MOD_N;
        sum_n = (sum_n + dp_A[i_n]) % MOD_N;
        incrStack_A.push(i_n);
    }
    return sum_n;
};

console.log(sumSubarrayMins([8,6,3,5,4,9,2]));