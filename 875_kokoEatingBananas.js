/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (P, h) {
    let [k_l, k_h] = [1, Number.MAX_SAFE_INTEGER];
    while (k_h - k_l) {
        let k_m = k_l + ((k_h - k_l) >>> 1);
        let h_req = 0;
        for (let p of P) {
            h_req += Math.ceil(p / k_m);
        }
        if (h_req <= h) k_h = k_m;
        else k_l = k_m + 1;
    }
    return k_l;
};