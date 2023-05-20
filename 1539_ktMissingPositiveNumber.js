/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let ithMissing_n = 0;
    let currMissing_n = null;
    let currArrInd_n = 0;
    for (let i_n = 1; ithMissing_n < k;++i_n) {
        if (currArrInd_n > arr.length - 1 || i_n !== arr[currArrInd_n])
            [ithMissing_n, currMissing_n] = [ithMissing_n + 1, i_n];
        else ++currArrInd_n;
    }
    return currMissing_n;
};

console.log(findKthPositive([2,3,4,7,11],5))