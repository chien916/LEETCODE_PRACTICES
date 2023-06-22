/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    /**
   * binary search by value, try "score"
   */
    let [d_lo, d_hi] = [0, 1e6]
    while (d_lo < d_hi) {
        let d_mid = d_lo + ((d_hi - d_lo) >>> 1)//left rounding
        {
            /**
             * bfs find a path where all diff of consec block is less or equal to d
             */
            let V = new Set()
            let Q = []
            const Dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            Q.push([0, 0])
            V.add("0,0")

            while (Q.length > 0) {
                let curr = Q.shift()
                //console.log(curr)
                for (let Dir of Dirs) {
                    let next = [curr[0] + Dir[0], curr[1] + Dir[1]]
                    if (V.has(next.join(","))
                        || heights[next[0]] === undefined
                        || heights[next[0]][next[1]] === undefined
                        || Math.abs(heights[curr[0]][curr[1]] - heights[next[0]][next[1]]) > d_mid)
                        continue
                    Q.push(next)
                    V.add(next.join(","))
                }
            }
            //console.log(`when s = ${d_mid} is ${[heights.length - 1, heights[0].length - 1].join(",")}`)
            //binary serach state transfer
            if (V.has([heights.length - 1, heights[0].length - 1].join(",")))
                d_hi = d_mid
            else
                d_lo = d_mid + 1
        }
    }
    return d_lo
};