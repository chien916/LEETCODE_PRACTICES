/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (A) {
    return A.reduce(([v_,c_], v) =>  [c_?v_:v,((c_?v_:v)-v)?(c_-1):(c_+1)],[null,0])[0]
};
console.log(majorityElement([3,3,4]))