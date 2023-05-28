/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
    let map_A = Array(26).fill().map(() => new Set());
    const cCOfA_n = "a".charCodeAt(0);
    for (let it_s of ideas) {
        map_A[it_s.charCodeAt(0) - cCOfA_n].add(it_s.substring(1));
    }

    let possb_n = 0;
    for (let i_n = 0; i_n < 26; ++i_n) {
        for (let j_n = i_n + 1; j_n < 26; ++j_n) {
            let lSize_n = map_A[i_n].size;
            let rSize_n = map_A[j_n].size;
            if (lSize_n === 0 || rSize_n === 0 ) continue;
            let istCount_n
                = lSize_n + rSize_n
                - (new Set([...map_A[i_n], ...map_A[j_n]])).size;
            possb_n += (2 * (map_A[i_n].size - istCount_n) * (map_A[j_n].size - istCount_n));
        }
    }

    return possb_n; 
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));