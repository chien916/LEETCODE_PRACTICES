/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    /**
     * 要点:O(log n) -> Binary Search
     * 
     * 发现:
     * - 如果在某个索引之前出现过单元素,那么左索引为奇数
     * 
     * !1:错误将length作为最大index
     * !2:二分mid无法跳出n,n+1,所以当毗邻时应分别尝试两种情况
     */
    let l_n = 0;
    let r_n = nums.length - 1;//!1
    // let dbg_s = "";
    //handles boundary case
    if (r_n === 0) return nums[0];
    for (; ;) {
        //1 2 3 -> 2 -> 2 -> 1,2
        //1 2 -> 1.5 -> 2 -> 1,2
        if (l_n + 1 == r_n) {
            return nums[nums[l_n] === nums[l_n - 1] ? r_n : l_n];//since answer is garanteed.
        }
        let mid_n = Math.ceil((l_n + r_n) * 0.5); //dbg_s += [l_n, mid_n, r_n].map((it) => "[" + it + "]" + nums[it]).join("|");
        if (nums[mid_n - 1] !== nums[mid_n] && nums[mid_n] !== nums[mid_n + 1]) {//!2
            //bingo got the single element!
            return nums[mid_n];
        }
        else if ((mid_n % 2) ? (nums[mid_n] === nums[mid_n + 1]) : (nums[mid_n] !== nums[mid_n + 1])) {//!2
            // dbg_s += "[c2]\n";
            //single element on the left
            r_n = mid_n;
        } else {
            // dbg_s += "[c3]\n";
            l_n = mid_n;
        }
        // console.log(dbg_s); dbg_s = "";
    }
};

// console.log(singleNonDuplicate([1,1,2,2,6,3,3]));



