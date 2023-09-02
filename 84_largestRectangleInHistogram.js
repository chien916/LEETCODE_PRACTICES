/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (P) {
    let l_p = P.length;
    //previous greater (forward)
    let PS = Array(l_p).fill(null);//default all points to left boundary
    for (let i = 1; i < l_p; ++i) {
        let i_ = i - 1;
        while (i_ !== null && P[i_] >= P[i]) { i_ = PS[i_]; }
        PS[i] = i_;
    }
    //next greater (previous smaller but reversed)
    let NS = Array(l_p).fill(null);
    for (let i = l_p - 2; i > -1; --i) {
        let i_ = i + 1;
        while (i_ !== null && P[i_] >= P[i]) { i_ = NS[i_]; }
        NS[i] = i_;
    }
    //console.log(PS,NS)
    //find aNSwer
    let a = 0;
    for (let i = 0; i < l_p; ++i) {
        let w = 1;
        if (PS[i] !== null) w += (i - PS[i] - 1);
        else w += i;
        if (NS[i] !== null) w += (NS[i] - i - 1);
        else w += (l_p - 1 - i);
       // console.log(w)
        let _a = w * P[i];
        a = Math.max(a, _a);
    }
    return a;
};