/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (A) {
    /**
     * Knowing a diagnoal will determine
     * the exact rectangle as the rectagnle
     * must be parallel to x and y axis
     */
    let M = new Map()
    for (let P of A) {
        P_str = P[0] + "," + P[1]//stringify
        if (!M.has(P_str)) M.set(P_str, 0)
        M.set(P_str, M.get(P_str) + 1)
    }
    let M_arr = [...M]

    let ans = Infinity
    for (let i = 0; i < M_arr.length - 1; ++i) {
        for (let j = i + 1; j < M_arr.length; ++j) {
            let [P1, P2] = [M_arr[i][0].split(","), M_arr[j][0].split(",")]
            if(P1[0]===P2[0]||P1[1]===P2[1]) continue
            //bad condition->diagnoal cannot be vertical and parallel to x or y axis
            let [P3, P4] = [[P1[0], P2[1]], [P2[0], P1[1]]]
            if (M.has(P3.join(",")) && M.has(P4.join(","))) {
                let area = Math.abs(P1[0] - P2[0]) * Math.abs(P1[1] - P2[1])
                ans = Math.min(ans, area)
            }
        }
    }
    return (ans === Infinity) ? 0 : ans
};

minAreaRect(
    [[1,1],[1,3],[3,1],[3,3],[2,2]])