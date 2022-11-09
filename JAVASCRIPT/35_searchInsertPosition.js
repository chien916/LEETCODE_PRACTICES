
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 0)
        return 0;
    if(target<=nums[0])
        return 0;
    if(target===nums[nums.length-1])
        return nums.length-1;
    if(target>nums[nums.length-1])
        return nums.length;
    let frontIndex = 0;

    // 粗心：数组的最后一个元素总是长度减一
    // let backIndex = nums.length;
    let backIndex = nums.length-1;

    while (backIndex - frontIndex > 1) {
        // 粗心：中点计算方法是求和除以二，而不是求差除以二
        // let middleIndex = Math.floor((backIndex-frontIndex)/2);
        let middleIndex = Math.floor((backIndex+frontIndex)/2);

        if(target===nums[middleIndex])
            return middleIndex;
        else if(target<nums[middleIndex])
            backIndex = middleIndex;
        else
            frontIndex = middleIndex;
    }
    // 错误点：需要插入的地方是要比当前元素要大，比下一个元素小，所以应该插在后索引而不是前索引
    // return frontIndex;
    return backIndex;

};

console.log(searchInsert([1,3,5,6],5));