/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (G) {
    let V = new Set();
    let check = (i, j) => V.has(`${i},${j}`);
    let visit = (i, j) => V.add(`${i},${j}`);
    let [w, h] = [G[0].length, G.length];
    const D = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let dfs = (i, j) => {
        console.log("dfs -> ", i, j)
        if (i === 3 && j === 9) {
            let _;
        }
        let r = true;
        for (let D_ of D) {
            let [i_, j_] = [i + D_[0], j + D_[1]];
            if (i_ < 0 || i_ >= h || j_ < 0 || j_ >= w) {
                r = false;
                continue;
            }
            if (check(i_, j_)) continue;
            if (G[i_][j_]) continue;
            visit(i_, j_);
            r = dfs(i_, j_) && r;

        }
        return r;
    }
    let a = 0;
    for (let i = 0; i < h; ++i) {
        for (let j = 0; j < w; ++j) {
            if (check(i, j)) continue;
            if (G[i][j]) continue;
            visit(i, j);
            if (dfs(i, j)) {
                console.log(i, j)
                ++a;
            }
        }
    }
    return a;
};
