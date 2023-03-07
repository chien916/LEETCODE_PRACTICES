
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    "use strict";
    this.valArray_nAA = matrix;
    this.prefixSumArray_nAA = [...matrix]; 
    for (let row_n = 0; row_n < this.prefixSumArray_nAA.length; ++row_n) {
        for (let col_n = 0; col_n < this.prefixSumArray_nAA[0].length; ++col_n) {
            this.prefixSumArray_nAA[row_n][col_n]
                = this.prefixSumArray_nAA[row_n][col_n]
                + ((row_n > 0) ? (this.prefixSumArray_nAA[row_n - 1][col_n]) : 0)
                + ((col_n > 0) ? (this.prefixSumArray_nAA[row_n][col_n - 1]) : 0)
                - ((row_n > 0 && col_n > 0) ? (this.prefixSumArray_nAA[row_n - 1][col_n - 1]) : 0);
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    "use strict";
    return this.prefixSumArray_nAA[row2][col2]
        - ((row1 > 0) ? (this.prefixSumArray_nAA[row1 - 1][col2]) : 0)
        - ((col1 > 0) ? (this.prefixSumArray_nAA[row2][col1 - 1]) : 0)
        + ((row1 > 0 && col1 > 0) ? (this.prefixSumArray_nAA[row1 - 1][col1 - 1]) : 0);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let numMatrix =new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
let res = numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)

let i = 0;