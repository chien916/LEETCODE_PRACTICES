/**
 * @return {number}
 */
var minTime = function (n_n, edges_nAA, hasApple_bA) {
    /**
     * 错误：注意graph是不是directed
     * 
     * 如果Hashmap的key是index，可以考虑用Array来代替
     * 
     */
    let edgesMap_M = new Map();
    let visitedSet_S = new Set();
    edges_nAA.forEach((it_nA) => {
        if (!edgesMap_M.has(it_nA[0])) edgesMap_M.set(it_nA[0], [it_nA[1]]); //forward connection
        else edgesMap_M.get(it_nA[0]).push(it_nA[1]);
        if (!edgesMap_M.has(it_nA[1])) edgesMap_M.set(it_nA[1], [it_nA[0]]); //backward connection
        else edgesMap_M.get(it_nA[1]).push(it_nA[0]);
    });
    let getExtTime_nf = function (n_n) {
        visitedSet_S.add(n_n);
        let ret_n = 0;
        if (edgesMap_M.has(n_n))
            edgesMap_M.get(n_n).forEach((it_n) => {
                if (!edgesMap_M.has(it_n)||visitedSet_S.has(it_n)) return;
                let currExtTime_n = getExtTime_nf(it_n);
                if (currExtTime_n >= 0) ret_n += (currExtTime_n + 2);
            });
        if (ret_n === 0) return hasApple_bA[n_n] ? 0 : -1;
        else return ret_n;
    };
    let ret_n = getExtTime_nf(0);
    if (ret_n === -1) ret_n = 0;
    return ret_n;
};


//error case
console.log(minTime(7
    , [[0, 2], [0, 3], [1, 2]]
    , [false, true, false, false]));

//test
// console.log(minTime(7
//     , [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]
//     , [false, false, true, false, true, true, false]));
