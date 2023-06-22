/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function (grid) {
    /**
     * binary search by value, try "score"
     */
    let [s_lo, s_hi] = [0, 1e9]
    while (s_lo < s_hi) {
        let s_mid = s_lo + ((s_hi - s_lo+1) >>> 1)//left rounding
        {
            /**
             * bfs find a path where all elements less or equal to s
             */
            let V = new Set()
            let Q = []
            const Dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            if (grid[0][0] >= s_mid){
                Q.push([0,0])
                V.add("0,0")
            }
            while (Q.length > 0) {
                let curr = Q.shift()
                //console.log(curr)
                for (let Dir of Dirs) {
                    let next = [curr[0] + Dir[0], curr[1] + Dir[1]]
                    if (V.has(next.join(","))
                        || grid[next[0]] === undefined
                        || grid[next[0]][next[1]] === undefined
                        || grid[next[0]][next[1]] < s_mid)
                        continue
                    Q.push(next)
                    V.add(next.join(","))
                }
            }
            //console.log(`when s = ${s_mid} is ${[grid.length - 1, grid[0].length - 1].join(",")}`)
            //binary serach state transfer
            if (V.has([grid.length - 1, grid[0].length - 1].join(",")))
                s_lo = s_mid
            else
                s_hi = s_mid - 1
        }
    }
    return s_lo
};

//console.log(maximumMinimumPath([[5,4,5],[1,2,6],[7,4,6]]))