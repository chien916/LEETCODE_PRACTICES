/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function (H) {
    const l_h = H.length;
    const _mod = 1e9 + 7;
    //array of set of preferred hats for each person
    const A_sp = Array(l_h).fill().map(
        () => new Set()
    );
    let h_max = -Infinity;
    let h_min = Infinity;
    for (let i = 0; i < l_h; ++i) {
        for (let j = 0; j < H[i].length; ++j) {
            A_sp[i].add(H[i][j]);
            if (H[i][j] > h_max) h_max = H[i][j];
            if (H[i][j] < h_min) h_min = H[i][j];
        }
    }

    //dp[i][j]: number of ways j(bm) people has their prefered hat taking first i hats
    //i is reduced
    const i_max = h_max;
    const j_max = (1 << l_h) - 1;
    let Dp = Array(j_max + 1).fill(0);
    Dp[0] = 1;//init driver

    const to_string = (s) => s.toString(2).padStart(l_h, "0").split("").reverse().join("");
    for (let i = h_min; i <= h_max; ++i) {//looking at each hat
        let _Dp = [...Dp];
        for (let j = 0; j <= j_max; ++j) {//looking at each state rep. people having their preferred hats
            if (!Dp[j]) continue;//current state not reachable (dead path)
            for (let k = 0; k < l_h; ++k) {//looking at each person
                if ((j & (1 << k))) continue;//this person already has a hat -> no need to reassign hat 
                if (!A_sp[k].has(i)) continue;//current hat is not preferred by the current person
                let j_ = j | (1 << k);//now the person is added to the person state
                //infer current dp state from previous dp state
                _Dp[j_] = (_Dp[j_] + (Dp[j] % _mod)) % _mod;
                //console.log(`i:${i} j:${to_string(j)} k:${k} j':${to_string(j_)} dp':${_Dp[j_]} Dp:${_Dp}`);
            }
        }
        Dp = _Dp;
    }

    return Dp[j_max];
};

console.log(numberWays([[3,5,1],[3,5]]))