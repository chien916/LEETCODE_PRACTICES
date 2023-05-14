/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let maxCount_n = 0;
    let fruitTypes_A = [null, null];
    let fruitInds_A = [[], []];
    for (let i_n = 0; i_n < fruits.length; ++i_n) {
        if (fruits[i_n] === fruitTypes_A[0]) {
            fruitInds_A[0].push(i_n);
        }
        else if (fruits[i_n] === fruitTypes_A[1]) {
            fruitInds_A[1].push(i_n);
        } else if (fruitTypes_A[1] === null ||
            (fruitTypes_A[0] !== null
                && fruitInds_A[0][fruitInds_A[0].length - 1] > fruitInds_A[1][fruitInds_A[1].length - 1])) {
            while (fruitInds_A[0][0] < fruitInds_A[1][fruitInds_A[1].length - 1]) fruitInds_A[0].shift();
            fruitTypes_A[1] = fruits[i_n];
            fruitInds_A[1] = [i_n];
        } else {
            while (fruitTypes_A[0] !== null && fruitInds_A[1][0] < fruitInds_A[0][fruitInds_A[0].length - 1]) fruitInds_A[1].shift();
            fruitTypes_A[0] = fruits[i_n];
            fruitInds_A[0] = [i_n];
        }
        maxCount_n = Math.max(maxCount_n, fruitInds_A[0].length + fruitInds_A[1].length);
    }
    return maxCount_n;
};

console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));