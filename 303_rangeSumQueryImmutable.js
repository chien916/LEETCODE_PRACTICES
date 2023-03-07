/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.valArray_nA = nums;
    this.prefixArray = [...nums];
    for(let i_n = 0;i_n<nums.length;++i_n){
        this.prefixArray[i_n]=(i_n===0)?nums[0]:nums[i_n]+this.prefixArray[i_n-1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixArray[right]-((left===0)?0:this.prefixArray[left-1]);
};
 var obj = new NumArray([-2, 0, 3, -5, 2, -1])
 var param_1 = obj.sumRange(0,2)
 