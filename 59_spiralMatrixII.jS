/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let toReturn_nA = Array(n).fill(null).map(()=>Array(n).fill(null));
    let [currXBegin_n, currYBegin_n, currXEnd_n, currYEnd_n]
        = [0, 0, n - 1, n - 1];
    let currCount_n = 1;
    while (currXBegin_n <= currXEnd_n && currYBegin_n <= currYEnd_n) {
        for (currX_n = currXBegin_n; currX_n <= currXEnd_n && currYBegin_n <= currYEnd_n; ++currX_n) {
            toReturn_nA[currYBegin_n][currX_n] = currCount_n++;
        }
        currYBegin_n += 1;

        for (currY_n = currYBegin_n; currY_n <= currYEnd_n && currXBegin_n <= currXEnd_n; ++currY_n) {
            toReturn_nA[currY_n][currXEnd_n] = currCount_n++;
        }
        currXEnd_n -= 1;

        for (currX_n = currXEnd_n; currX_n >= currXBegin_n && currYBegin_n <= currYEnd_n; --currX_n) {
            toReturn_nA[currYEnd_n][currX_n] = currCount_n++;
        }
        currYEnd_n -= 1;

        for (currY_n = currYEnd_n; currY_n >= currYBegin_n && currXBegin_n <= currXEnd_n; --currY_n) {
            toReturn_nA[currY_n][currXBegin_n] = currCount_n++;
        }
        currXBegin_n += 1;

    }
    return toReturn_nA;
};

generateMatrix(3)