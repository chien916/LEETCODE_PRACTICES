/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
    /**
     * THEORM: a XOR b = c -> a XOR c = b
     */
    let retA = []
    for (let [firN, secN] of queries) {
        //first XOR second = val
        let valN = ((firN ^ secN) >>> 0).toString();
        let digN = Math.floor(Math.log2(valN)) + 1;
        
    }
};