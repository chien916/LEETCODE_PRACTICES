/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (V_n) {

    let incr = (k, M) => {
        if (!M.has(k)) M.set(k, 0);
        M.set(k, M.get(k) + 1);
    }
    let decr = (k, M) => {
        M.set(k, M.get(k) - 1);
        if (!M.get(k)) M.delete(k);
    }

    let M_l = new Map();//sequence last number
    let M_a = new Map();//available number sequence
    let M_d = new Map();//deleted number and count
    for (let n of V_n) {
        incr(n, M_a);
    }
    for (let n of V_n) {
        if (M_d.has(n)) {
            decr(n, M_d);
            continue;
        }
        //option 1: append to a sequence
        if (M_l.has(n - 1)) {
            decr(n, M_a);
            decr(n - 1, M_l);
            incr(n, M_l);
        }
        //option 2 form a new sequence
        else if (M_a.has(n + 1) && M_a.has(n + 2)) {
            decr(n, M_a);
            decr(n + 1, M_a);
            incr(n + 1, M_d);
            decr(n + 2, M_a);
            incr(n + 2, M_d);
            incr(n + 2, M_l);
        } else {
            return false;
        }
    }

    return true;
};

console.log(isPossible([1,2,3,3,4,5]));