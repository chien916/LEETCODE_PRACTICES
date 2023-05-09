/**
 * @param {number[][]} buildings_nAA
 * @return {number[][]}
 */
var getSkyline = function (buildings_nAA) {
    let ret_nAA = [];
    let xToYAndTypeMap_nnAM = new Map();
    buildings_nAA.forEach((it_nA) => {
        for (let i_n = 0; i_n <= 1; ++i_n) {
            if (xToYAndTypeMap_nnAM.has(it_nA[i_n])) {
                let currEntry_nAA = xToYAndTypeMap_nnAM.get(it_nA[i_n]);
                currEntry_nAA.push([it_nA[2], i_n === 0 ? "left" : "right"]);
                xToYAndTypeMap_nnAM.set(it_nA[i_n], currEntry_nAA);
            } else
                xToYAndTypeMap_nnAM.set(it_nA[i_n], [[it_nA[2], i_n === 0 ? "left" : "right"]]);
        }
    });

    let currHeight_n = NaN;
    [...buildings_nAA.keys()].sort((a_n, b_a) => a_n - b_a).forEach((it_n) => {

    });

};