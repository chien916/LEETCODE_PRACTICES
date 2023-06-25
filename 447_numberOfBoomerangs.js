/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (A) {
    /**
     * Fixing one point, use hashmap to find all 
     * that satisfies the requirement
     */
    let ans = 0
    let get_dist = (Pa, Pb) => {
        return ((Pb[1] - Pa[1])**2+(Pb[0] - Pa[0])**2)**0.5
    }
    for (let i = 0; i < A.length; ++i) {
        let M = new Map()
        for (let j = 0; j < A.length; ++j) {
            if (i === j) continue
            let dist = get_dist(A[i], A[j])
            if (!M.has(dist)) M.set(dist, 0)
            M.set(dist, M.get(dist) + 1)
        }
        for (let [_, val] of M) {
            /**   P(n,r)
             *  = n!/(n-r)!
             *    P(n,2)
             *  = n!/(n-2)!
             *  = n*(n-1)
             */
            ans += (val) * (val - 1)
        }
    }
    return ans
};