/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const compare_f = (a_nA, b_nA) => a_nA[0] - b_nA[0];
    let x_nA = [[ax1, ax2], [bx1, bx2]].sort(compare_f);
    let y_nA = [[ay1, ay2], [by1, by2]].sort(compare_f);
    let dx_n = x_nA[0][1]-x_nA[1][0];
    let dy_n = y_nA[0][1]-y_nA[1][0];
    let overlappedArea_n = (dx_n<=0||dy_n<=0)?0:dx_n*dy_n;
    let regulArea_n = (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1);
    return -overlappedArea_n+regulArea_n;
};

computeArea(0,0,0,0,-1,-1,1,1)