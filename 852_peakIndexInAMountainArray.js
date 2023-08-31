/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (V) {
    let [i_l, i_r] = [0, V.length - 1];
    for (; i_l < i_r;) {
        let i_m = i_l + ((i_r - i_l) >>> 1);//round down
        //console.log(i_l, i_m, i_r)Z
        if (V[i_m] > V[i_m + 1]) i_r = i_m;
        else i_l = i_m + 1;
    }
    return i_l;
};