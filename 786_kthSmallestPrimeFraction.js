/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
    let [f_lo, f_hi] = [0, 1]
    while (f_hi - f_lo > 1e-6) {
        let f_mid = f_lo + (f_hi - f_lo) / 2
        let _k = 0
        for (let i = 0; i < arr.length; ++i) {
            let [j_lo, j_hi] = [i + 1, arr.length - 1]
            /**
             * _f = arr[i]/arr[j]
             * locate j such that _f<=f_mid
             * since arr is monotonically ascending
             * as j increases, _f decreases
             * _f too small 
             */
            if (arr[i] / arr[j_hi] > f_mid) continue
            while (j_lo < j_hi) {
                let j_mid = j_lo + ((j_hi - j_lo) >>> 1)
                let _f = arr[i] / arr[j_mid]
                if (_f <= f_mid) j_hi = j_mid
                else j_lo = j_mid + 1
            }
            _k += (arr.length - j_lo)
        }
        //console.log(`f = ${f_mid} -> _k = ${_k}`)
        if (_k >= k) f_hi = f_mid
        else f_lo = f_mid
    }
   // console.log(`f determined to be = ${f_lo}`)
    //locate element
    let IJ = [-1, -1]
    let diff = Infinity
    for (let i = 0; i < arr.length - 1; ++i) {
        let [j_lo, j_hi] = [i + 1, arr.length - 1]
        while (j_lo < j_hi) {
            let j_mid = j_lo + ((j_hi - j_lo) >>> 1)
            let _f = arr[i] / arr[j_mid]
            if (_f <= f_lo) j_hi = j_mid
            else j_lo = j_mid + 1
        }
        if (Math.abs(f_lo - arr[i] / arr[j_lo]) < diff) {
            IJ = [i, j_lo]
            diff = Math.abs(f_lo - arr[i] / arr[j_lo])
            //console.log(`f determined to be = [${arr[i]},${arr[j_lo]}] -> diff = ${diff}`)
        }
        if (j_lo - 1 > -1 && Math.abs(arr[i] / arr[j_lo - 1] - f_lo) < diff) {
            IJ = [i, j_lo - 1]
            diff = Math.abs(arr[i] / arr[j_lo - 1] - f_lo)
            //console.log(`f determined to be = [${arr[i]},${arr[j_lo - 1]}] -> diff = ${diff}`)
        }
    }
    return [arr[IJ[0]], arr[IJ[1]]]
};