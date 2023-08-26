/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (G) {
    const w = G.length;
    const D = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    //DFS: find all adj water grids given a block of island
    let dfs = (i, j, S_l, S_w) => {
        for (let d of D) {
            let [i_, j_] = [i + d[0], j + d[1]];

            if (i_ > -1 && i_ < w
                && j_ > -1 && j_ < w
                && !S_l.has(`${i_},${j_}`)
                && !S_w.has(`${i_},${j_}`)
            ) {
               // let dbg = `i=${i_} j=${j_} ${G[i_][j_]}`; console.log(dbg)

                if (!G[i_][j_]) {
                    S_w.add(`${i_},${j_}`);
                }
                else {
                    S_l.add(`${i_},${j_}`);
                    dfs(i_, j_, S_l, S_w);
                }
            }
        }
    }

    //DFS Runner: find adj water grids for 1 island
    let [S_l1, S_w1] = [new Set(), new Set()];
    for (let [i, r] = [0, true]; r && i < w; ++i) {
        for (let j = 0; r && j < w; ++j) {
            if (G[i][j]) {
                S_l1.add(`${i},${j}`);
                dfs(i, j, S_l1, S_w1);
                r = false;
            }
        }
    }
    //Q Generation for BFS
    let Q = [...S_w1].map(
        (s) => {
            let S = s.split(",");
            return [parseInt(S[0]), parseInt(S[1]), 1];
        }
    )

    //BFS: find shortest way to go to a non-visited land
    let S_2 = new Set();
    let i_q = 0;
    while (i_q < Q.length) {
        let [i, j, l] = Q[i_q++];
        for (let d of D) {
            let [i_, j_] = [i + d[0], j + d[1]];
            if (i_ <= -1 || i_ >= w || j_ <= -1 || j_ >= w) continue;//out of grid
            if (S_l1.has(`${i_},${j_}`) || S_w1.has(`${i_},${j_}`) || S_2.has(`${i_},${j_}`)) continue;//either land1 or adj of land1
            S_2.add(`${i_},${j_}`);//mark as visited
            if (G[i_][j_]) {//found land of 2
                return l;
            } else {
                Q.push([i_, j_, l + 1]);
            }
        }
    }
};

