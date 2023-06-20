/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
    let [A1, A2] = [nums1, nums2]
    for (let A of [A1, A2]) A.sort((a, b) => a - b)
    let d = A2.reduce((p, c) => p + c, 0) - A1.reduce((p, c) => p + c, 0)
    if (d === 0) return 0
    let ans = 0
    let [I1, I2] = [[0, A1.length - 1], [0, A2.length - 1]]
    while (I1[0] <= I1[1] || I2[0] <= I2[1]) {
        if (!d) return ans
        else if (d > 0) {
            /**
             * sum[A2] > sum[A1]
             * incr A1 or decr A2
             */
            let [incr, decr] = [6 - A1[I1[0]], A2[I2[1]] - 1].map((it) => isNaN(it) ? 0 : it)
            if (incr === 0 && decr === 0) return -1
            else if (incr > decr) {
                incr = Math.min(incr, d)
                d -= incr
                A1[I1[0]] = A1[I1[0]] + incr
                I1[0]++
            } else {
                decr = Math.min(decr, d)
                d -= decr
                A2[I2[1]] = A2[I2[1]] - decr
                I2[1]--
            }
        } else {
            /**
             * sum[A2] < sum[A1]
             * decr A1 or incr A2
             */
            let [decr, incr] = [A1[I1[1]] - 1, 6 - A2[I2[0]]].map((it) => isNaN(it) ? 0 : it)
            if (decr === 0 && incr === 0) return -1
            else if (decr > incr) {
                decr = -Math.max(-decr, d)
                d += decr
                A1[I1[1]] = A1[I1[1]] - decr
                I1[1]--
            } else {
                incr = -Math.max(-incr, d)
                d += incr
                A2[I2[0]] = A2[I2[0]] + incr
                I2[0]++
            }
        }
        ++ans
        //console.log(` D-${d} -> Ans-${ans}`)
    }
    return ans ? ans : -1
};
//console.log(minOperations(a,b))