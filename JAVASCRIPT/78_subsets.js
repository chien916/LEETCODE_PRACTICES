/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let _return = [];
    const LEN_OF_INP_ARR = nums.length;
    var findSubset = function (curArr, curIndOfInpArr) {
        if (curIndOfInpArr === LEN_OF_INP_ARR) {
            _return.push(curArr);
            //递归的边缘情况忘记return
            return;
        }
        // findSubset(curArr.push(nums[curIndOfInpStr]),curIndOfInpStr+1);
        findSubset(curArr.slice(), curIndOfInpArr + 1);
        curArr.push(nums[curIndOfInpArr])
        findSubset(curArr.slice(), curIndOfInpArr + 1);
    }
    findSubset([], 0);
    return _return;
};


