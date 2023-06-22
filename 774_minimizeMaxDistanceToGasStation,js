/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function (stations, k) {
    const err = 1e-6
    /** 
 * Binary search by value
 * trying the panalty directly
 * lower bound -> 0
 * higher bound -> max distance of stations[i] and stations[i-1]
 * 
 * _k -> number of stations needed to add to make a certain adj distance (mid)
 * _k > k means we need more stations to attain this distance (bad conditions)
 * _k <= k means we need exactly or less station to obtain this distance (good condition)
 * -> this means can try a smaller distance
 * 
 */
    let ans_lo = 1e-6//converges to 0
    let ans_hi = stations.reduce(
        (p, v, i, A) => Math.max(p, i === 0 ? -Infinity : v - A[i - 1])
    )
    while (ans_hi - ans_lo > err) {
        let ans_mid = ans_lo + (ans_hi - ans_lo) / 2
        let _k = 0
        for (let i = 1; i < stations.length; ++i) {
            let dist = stations[i] - stations[i - 1]
            //use ceil not floor when try to count the divider to achieve a certain distance
            let addible = Math.ceil(dist / ans_mid) - 1//error1
            if (addible > 0) _k += addible
        }
        //console.log(`try ${ans_mid} gives k = ${_k}`)
        if (_k <= k) ans_hi = ans_mid
        else ans_lo = ans_mid
    }
    return ans_lo + (ans_hi - ans_lo) / 2
};