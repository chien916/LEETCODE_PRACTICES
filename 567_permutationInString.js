/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    //from question 438
    var findAnagrams = function (s, p) {
        let hm = new Map();
        let _ret_A = [];
        //init
        for (let i_n = 0; i_n < p.length; ++i_n) {
            let itP_n = p.charCodeAt(i_n);
            hm.set(itP_n, hm.has(itP_n) ? hm.get(itP_n) - 1 : -1);
            let itS_n = s.charCodeAt(i_n);
            hm.set(itS_n, hm.has(itS_n) ? hm.get(itS_n) + 1 : 1);
            if (hm.get(itP_n) === 0) hm.delete(itP_n);
            if (hm.get(itS_n) === 0) hm.delete(itS_n);
        }
        if (hm.size === 0) _ret_A.push(0);
        //process
        for (let i_n = p.length; i_n < s.length; ++i_n) {
            let it_n = s.charCodeAt(i_n);
            let prevIt_n = s.charCodeAt(i_n - p.length);
            hm.set(prevIt_n, hm.has(prevIt_n) ? hm.get(prevIt_n) - 1 : -1);
            hm.set(it_n, hm.has(it_n) ? hm.get(it_n) + 1 : 1);
            if (hm.get(prevIt_n) === 0) hm.delete(prevIt_n);
            if (hm.get(it_n) === 0) hm.delete(it_n);
            //console.log([...hm].map((it_A) => it_A[1].toString() + "个" + String.fromCharCode(it_A[0])));
            //test if requirement met
            if (hm.size === 0) _ret_A.push(i_n - p.length + 1);
        }
        return _ret_A;
    };
    return findAnagrams(s2, s1).length > 0;
};