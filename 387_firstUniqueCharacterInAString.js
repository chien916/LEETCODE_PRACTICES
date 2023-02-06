/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const minCharCode_n = "a".charCodeAt(0);
    let arr_nA = Array(26).fill(-1);
    for (let i_n = 0; i_n < s.length; ++i_n) {
        let currCharCodeInd_n = s[i_n].charCodeAt(0) - minCharCode_n;
        if (arr_nA[currCharCodeInd_n] !== -1) {
            arr_nA[currCharCodeInd_n] = -2;
        } else {
            arr_nA[currCharCodeInd_n] = i_n;
        }
    }
    let smallestInd_n = 10e5+1;
    for (let i_n = 0; i_n < arr_nA.length; ++i_n) {
        if (arr_nA[i_n] >= 0 && arr_nA[i_n] < smallestInd_n) smallestInd_n = arr_nA[i_n];
    }
    return smallestInd_n === 10e5+1 ? -1 : smallestInd_n;
};
firstUniqChar("itwqbtcdprfsuprkrjkausiterybzncbmdvkgljxuekizvaivszowqtmrttiihervpncztuoljftlxybpgwnjb")