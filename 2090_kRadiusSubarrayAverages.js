/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    const A = nums
    const len = nums.length
    let Ans = []
    let sum = 0
    let I = [0, 2 * k]//inclusive range
    if (2 * k + 1 > len) return Array(len).fill(-1)//boundary case
    for (let i = 0; i <= I[1]; ++i) sum += A[i]
    while (1) {
        Ans.push(Math.floor(sum / (2 * k + 1)))
        //peek
        if (I[1] + 1 <= len - 1)
            sum = sum - A[I[0]++] + A[++I[1]]
        else
            break
    }
    let diff = len - Ans.length
    Ans = Array(diff / 2).fill(-1).concat(Ans)
    Ans = Ans.concat(Array(diff / 2).fill(-1))
    return Ans
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))