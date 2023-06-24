/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (A) {
    let [h_lo, h_hi] = [0, 5000]
    while (h_lo < h_hi) {
        let h_mid = h_lo + ((h_hi - h_lo + 1) >>> 1)
        let _h = 0
        for (let c of A) {
            if (c >= h_mid) _h++
            if (_h >= h_mid) break
        }
        if (_h >= h_mid) h_lo = h_mid
        else h_hi = h_mid - 1
    }
    return h_lo
};