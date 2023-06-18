/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function (nums1, nums2) {
    const m = 1e9 + 7
    const L = [nums1.length, nums2.length]
    let I = [0, 0]
    let Score = [0, 0]
    while (I[0] < L[0] || I[1] < L[1]) {
        if (!(I[0] - L[0])) Score[1] += nums2[I[1]++]
        else if (!(I[1] - L[1])) Score[0] += nums1[I[0]++]
        else if (nums1[I[0]] > nums2[I[1]]) Score[1] += nums2[I[1]++]
        else if (nums1[I[0]] < nums2[I[1]]) Score[0] += nums1[I[0]++]
        else Score[0] = Score[1] = Math.max(Score[0] += nums1[I[0]++], Score[1] += nums2[I[1]++])
    }
    let ret = Math.max(...Score) % m
    return ret
};