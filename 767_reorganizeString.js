// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reorganizeString = function (s) {
//     /**
//      * 
//      */
//     // let O = Array(26).fill().map(
//     //     (_, i) => [i, 0]
//     // );
//     // for (let i = 0; i < s.length; ++i) {
//     //     ++O[s.charCodeAt(i) - "a".charCodeAt(0)][1];
//     // }
//     // O.sort((A, B) => -A[1] + B[1]);
//     // console.log(O)
//     // for (let i = 1; i < 26; ++i) {
//     //     if (O[i - 1][1] - O[i][1] > 1) return "";
//     // }
//     // let a = ""

//     // while (O[0][1]) {
//     //     //aab -> a:3 b:2
//     //     //ab ab a
//     //     for (let i = 0; O[i][1] && i < 26; ++i) {
//     //         a = `${a}${String.fromCharCode(O[i][0]+"a".charCodeAt(0))}`;
//     //         --O[i][1];
//     //     }
//     // }
//     // return a;
// };

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let Q = [[null, -Infinity]];
    let query = (v) => {
        let [i_l, i_r] = [0, Q.length - 1];
        while (i_r > i_l) {
            let i_m = i_l + ((i_r - i_l + 1) >>> 1);
            if (Q[i_m][1] <= v) i_l = i_m;
            else i_r = i_m - 1;
        }
        return i_l;
    }
    let O = new Map();
    for (let i = 0; i < s.length; ++i) {
        if (!O.has(s.charAt(i))) O.set(s.charAt(i), 0);
        O.set(s.charAt(i), O.get(s.charAt(i)) + 1);
    }
    for (let [k, v] of O) {
        Q.push([k, v]);
    }
    Q.sort((A, B) => A[1] - B[1]);
    //console.log(Q)
    let a = "";
    while (Q.length > 1) {
        let _E;
        if (a.charAt(a.length - 1) === Q[Q.length - 1][0]) {
            if (Q.length === 2) return "";
            _E = Q.splice(Q.length - 2, 1).pop();
        } else {
            _E = Q.pop();
        }
        a += _E[0];
        --_E[1];
        if (_E[1]) Q.splice(query(_E[1]) + 1, 0, _E);//!!!!! 自己Implement pq需要index +1
        //console.log(Q, a)
    }
    return a;
};