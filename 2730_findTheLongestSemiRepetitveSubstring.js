/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
    let consA = []
    for (let iN = 1; iN < s.length; ++iN) {
        if (s.charAt(iN) === s.charAt(iN - 1))
            consA.push(iN)
    }
    consA = [0, ...consA, s.length];
    if (consA.length <= 3) return s.length
    let retN = 0
    for (let iN = 1; iN < consA.length - 1; ++iN) {
        //[01]234[56] -> 12345
        //  |      |
        //trivial [01]
        //         [12] ->
        //         | | -> okay no special trt needed
        retN = Math.max(retN, consA[iN + 1] - consA[iN - 1])
    }
    return retN
};
//test
console.log(longestSemiRepetitiveSubstring("52233"))