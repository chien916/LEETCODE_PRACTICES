
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //[0 1 2 3 4 5 6 7]
    //[6 7 0 1 2 3 4 5]
    let array_nA = nums;
    let target_n = target;
    let binarySearch_fw = (left_n, right_n) => {
        if (right_n - left_n <= 1){
            if(array_nA[left_n] === target_n) return left_n;
            else if(array_nA[right_n] === target_n) return right_n;
            else return -1;
        }
        let middleInd_n = Math.ceil((left_n + right_n) / 2);
        let leftVal_n = array_nA[left_n];
        let midVal_n = array_nA[middleInd_n];
        let rightVal_n = array_nA[right_n];
        if(leftVal_n <= midVal_n){
            return (leftVal_n<=target_n&&target_n<=midVal_n)
            ?binarySearch_fw(left_n, middleInd_n)
            :binarySearch_fw(middleInd_n, right_n);
        }else{
            return (midVal_n<=target_n&&target_n<=rightVal_n)
            ?binarySearch_fw(middleInd_n, right_n)
            :binarySearch_fw(left_n, middleInd_n);
        }
    }
    return binarySearch_fw(0, array_nA.length - 1);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
