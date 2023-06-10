/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if(coordinates.length<=2) return true;
    coordinates.sort((a_A, b_A) => a_A[0] - b_A[0]);
    let _slope_f = (a_A, b_A) => {
        if(a_A[0]-b_A[0]===0) return Number.MAX_SAFE_INTEGER;
        return (b_A[1] - a_A[1]) / (b_A[0] - a_A[0]);
    }
    for (let i_n = 2; i_n < coordinates.length; ++i_n) {
        if (_slope_f(coordinates[i_n], coordinates[i_n - 1]) !== _slope_f(coordinates[i_n - 1], coordinates[i_n - 2]))
            return false;
    }
    return true;
};