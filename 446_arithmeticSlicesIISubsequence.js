/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    /**
     * hash map stores all
     * key: the difference of arithmic sequence
     * val: number of arithmic sequences
     */
    let dp_A = Array(nums.length).fill().map(() => new Map());
    let _ret_n = 0;
    for (let i_n = 0; i_n < nums.length; ++i_n) {
        let sum_n = 0;
        for (let j_n = 0; j_n < i_n; ++j_n) {
            let diff_n = nums[i_n] - nums[j_n];
            if (dp_A[j_n].has(diff_n)) {
                dp_A[i_n].set(diff_n, sum_n += (dp_A[j_n].get(diff_n) + 1));
                //dp_A[j_n].delete(diff_n);
            } else {
                dp_A[i_n].set(diff_n, 2);
            }
        }
    };
    // let cache = new Map();
    // let _ret_n = 0;
    // for (let _M of dp_A) {
    //     for (let [_, val_n] of _M) {
    //         if (!cache.has(val_n)) {
    //             let _ret_n = 0;
    //             for (let n = 3; n <= val_n; ++n) {
    //                 _ret_n += (n - 2);
    //             }
    //             cache.set(val_n, _ret_n);
    //         }
    //         _ret_n += cache.get(val_n);
    //     }
    // }

    //let i = 0;
    return _ret_n;
};

numberOfArithmeticSlices([7, 7, 7, 7, 7]); 