/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if(nums.length === 0) return [];
    let _ret_A = [];
    let currChain_A = [];
    for (let it_n of nums) {
        if (currChain_A.length === 0 || currChain_A[currChain_A.length - 1] + 1 === it_n) currChain_A.push(it_n);
        else {
            _ret_A.push(
                currChain_A[0].toString()
                    + (currChain_A.length > 1 ? ("->" + currChain_A[currChain_A.length - 1].toString()) : ""));
            currChain_A = [];
            currChain_A.push(it_n);
        }
    }
    _ret_A.push(
        currChain_A[0].toString()
            + (currChain_A.length > 1 ? ("->" + currChain_A[currChain_A.length - 1].toString()) : ""));
    return _ret_A;
};

console.log(summaryRanges([0,1,2,4,5,7]))