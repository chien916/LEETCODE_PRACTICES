/**
 *
 * 知识点：
 * 为了避免重复，只需要在跳过的时候跳过重复元素即可
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let _return = [];
    nums=nums.sort()
    const findSubset = function (curArr, curIndOfInpArr) {
        if (curIndOfInpArr > nums.length) {
            return;
        }
        if(curIndOfInpArr===nums.length){
            _return.push(curArr);
            return;
        }
        // findSubset(curArr.push(nums[curIndOfInpStr]),curIndOfInpStr+1);
        let _curIndOfInpArr = curIndOfInpArr;
        while (nums[_curIndOfInpArr] === nums[_curIndOfInpArr + 1]) {
            ++_curIndOfInpArr;
        }
        findSubset(curArr.slice(), _curIndOfInpArr + 1);
        curArr.push(nums[curIndOfInpArr])
        findSubset(curArr.slice(), curIndOfInpArr + 1);
    };
    findSubset([], 0);
    return _return;
};

