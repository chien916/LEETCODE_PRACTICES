/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    let MAP = new Map()
    let L = nums.length
    let A = nums
    let ans = 0

    MAP.set(A[0], 1)
    for (let [l, r] = [0, 0]; l < L; ) {
        //locate the right pointer to the first inclusive range
        while (MAP.size < k && r + 1 < L) {
            if (!MAP.has(A[r + 1]))
                MAP.set(A[r + 1], 0)
            MAP.set(A[r + 1], MAP.get(A[r + 1]) + 1)
            ++r
        }
        //locate the right prime pointer to the last inclusive range
        let _r = r
        while (_r + 1 < L && MAP.has(A[_r + 1])) {
            MAP.set(A[_r + 1], MAP.get(A[_r + 1]) + 1)
            ++_r
        }
        //#eligble arrays 
        if (MAP.size === k) {
            ans += _r - r + 1
            //console.log(`${l} , ${r} -> ${_r}`)
            // for (let _i = r + 1; _i <= _r + 1; ++_i) {
            //     console.log(A.slice(l, _i))
            // }
            //console.log([...MAP].join(" ")+'\n')
        }

        //disgard the right prime pointer pointing element
        while (_r > r) {
            if (MAP.set(A[_r], MAP.get(A[_r]) - 1).get(A[_r]) === 0)
                MAP.delete(A[_r])
            --_r
        }
        //disgard the left pointer pointing element
        if (MAP.set(A[l], MAP.get(A[l]) - 1).get(A[l]) === 0)
            MAP.delete(A[l])
        ++l
    }

    return ans
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))