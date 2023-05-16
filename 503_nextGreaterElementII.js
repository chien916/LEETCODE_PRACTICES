/**decrde
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    /**
     * Keypoint:
     * Monotonic stack for circular array -> iterate twice!
     */
    let decrStack_A = [];
    let _ret_A = Array(nums.length).fill(-1);
    for (let i_n = 0; i_n <nums.length * 2 ; ++i_n) {
        while (decrStack_A.length > 0
            && nums[i_n % nums.length] > nums[decrStack_A[decrStack_A.length - 1]]) {
            let currInd_n = decrStack_A.pop();
            _ret_A[currInd_n] = nums[i_n%nums.length];
        }
        decrStack_A.push(i_n%nums.length);
    }
    return _ret_A;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));