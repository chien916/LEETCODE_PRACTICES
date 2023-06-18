/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let Ans = []
    const Inp = [firstList, secondList]
    const Len = [firstList.length, secondList.length]
    let I = [0, 0]

    if (!(Len[0]) || !(Len[1])) return []

    while (I[0] < Len[0] && I[1] < Len[1]) {
        let Curr = [Math.max(Inp[0][I[0]][0], Inp[1][I[1]][0])
            , Math.min(Inp[0][I[0]][1], Inp[1][I[1]][1])]
        if (Curr[0] <= Curr[1]) Ans.push(Curr)
        if (!(I[0] - Len[0])) ++I[1]
        else if (!(I[1] - Len[1]) || Inp[0][I[0]][1] < Inp[1][I[1]][1]) ++I[0]
        else ++I[1]
    }

    return Ans
};