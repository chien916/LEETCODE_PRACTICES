/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
    /**
     * -- DERIVITIVES OF TWO POINTERS PROBLEMS -- 
     * Trick: 
     * -> HANDLING DUPLICATES VALUE
     * When left and right val are diff => 
     * Find left and right subarray that has the same value
     * (l'-l+1)*(r-r'+1) is the number of eligble answers
     * The next window is [l'+1,r'-1]
     * 
     * When left and right val are same => 
     * (r-l+1)*(r-l)//2 is the number of eligble answers
     * Break the sliding window loop immediately
     */
    //preprocessing
    const [A1, A2] = [nums1, nums2]
    for (const It of [A1, A2]) It.sort((a, b) => a - b)
    //console.log(A1)
    //console.log(A2)

    let ans = 0
    for (const [_A1, _A2] of [[A1, A2], [A2, A1]]) {
        //console.log("_----_")
        for (const it1 of _A1) {

            const I = [0, _A2.length - 1]
            while (I[0] < I[1]) {
                const d = (_A2[I[0]] * _A2[I[1]] - it1 ** 2)
                if (d < 0) ++I[0]
                else if (d > 0) --I[1]
                else if (_A2[I[1]] - _A2[I[0]]) {
                    const _I = [...I]
                    while (!(_A2[_I[0]] - _A2[_I[0] + 1])) ++_I[0]
                    while (!(_A2[_I[1]] - _A2[_I[1] - 1])) --_I[1]
                    ans += (_I[0] - I[0] + 1) * (I[1] - _I[1] + 1)//error1
                   // console.log(`C1 ${(_I[0] - I[0] + 1) * (I[1] - _I[1] + 1)} -> ${it1}^2=${_A2[I[0]]}*${_A2[I[1]]}`)
                    I[0] = _I[0] + 1
                    I[1] = _I[1] - 1
                } else {
                    ans += (((I[1] - I[0] + 1) * (I[1] - I[0])) >> 1)
                    //console.log(`C2 ${(((I[1] - I[0] + 1) * (I[1] - I[0])) >> 1)} -> ${it1}^2=${_A2[I[0]]}*${_A2[I[1]]}`)
                    break//error 3
                    //++I[0]
                    //--I[1]
                }
            }
        }
    }
    return ans
}

//console.log(numTriplets([7, 3, 4, 2, 1, 4, 1, 6, 1, 1, 5], [3, 5, 2, 4, 3, 1, 7, 5, 7, 5]))