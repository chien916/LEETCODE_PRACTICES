/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let toReturn_nA = [];
    let currXBegin_n = 0;
    let currXEnd_n = matrix[0].length - 1;
    let currYBegin_n = 0;
    let currYEnd_n = matrix.length - 1;
    while (currXBegin_n <= currXEnd_n && currYBegin_n <= currYEnd_n) {
        for (let currX_n = currXBegin_n; currYBegin_n <= currYEnd_n && currX_n <= currXEnd_n; ++currX_n) {
            toReturn_nA.push(matrix[currYBegin_n][currX_n]);
        }
        ++currYBegin_n;
        for (let currY_n = currYBegin_n; currXBegin_n<=currXEnd_n&&currY_n <= currYEnd_n; ++currY_n) {
            toReturn_nA.push(matrix[currY_n][currXEnd_n]);
        }
        --currXEnd_n;
        for (let currX_n = currXEnd_n; currYBegin_n <= currYEnd_n &&currX_n >= currXBegin_n; --currX_n) {
            toReturn_nA.push(matrix[currYEnd_n][currX_n]);
        }
        --currYEnd_n;
        for (let currY_n = currYEnd_n; currXBegin_n<=currXEnd_n&&currY_n >= currYBegin_n; --currY_n) {
            toReturn_nA.push(matrix[currY_n][currXBegin_n]);
        }
        ++currXBegin_n;
    }
    return toReturn_nA;
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);