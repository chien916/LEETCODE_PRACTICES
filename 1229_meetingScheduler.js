/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function (slots1, slots2, duration) {

    const d = duration
    const A = [slots1, slots2]
    const L = [slots1.length, slots2.length]
    const I = [0, 0]

    for (let It of A) It.sort((A, B) => A[0] - B[0])

    while (I[0] < L[0] && I[1] < L[1]) {
        const Curr = [Math.max(A[0][I[0]][0], A[1][I[1]][0]), Math.min(A[0][I[0]][1], A[1][I[1]][1])]
        if (Curr[1] - Curr[0] >= d) return [Curr[0], Curr[0] + d]
        if (A[0][I[0]][1] < A[1][I[1]][1]) ++I[0]
        else ++I[1]
    }

    return []
};

// console.log(minAvailableDuration([[216397070, 363167701], [98730764, 158208909], [441003187, 466254040], [558239978, 678368334], [683942980, 717766451]]
//     , [[50490609, 222653186], [512711631, 670791418], [730229023, 802410205], [812553104, 891266775], [230032010, 399152578]]
//     , 456085))