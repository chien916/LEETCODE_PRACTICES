/**
 * @param {number} x_n
 * @param {number} y_n
 * @return {number}
 */
var hammingDistance = function (x_n, y_n) {
    let diffCount_n = 0;
    while (x_n > 0 || y_n > 0) {
        if(!!((x_n&1)^(y_n&1))) ++diffCount_n;
        x_n>>>=1;
        y_n>>>=1;
    }
    return diffCount_n;
};
hammingDistance(1,4);