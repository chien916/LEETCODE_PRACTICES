/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
var getMaxGridHappiness = function (m, n, i_max, e_max) {
    /**
     * state: 
     */

    let __state2str_cache = new Map();
    let state2str = (s) => {
        if (!__state2str_cache.has(s)) {
            let arrstr = "";
            let s_ = s;
            for (let i = 0; i < n; ++i) {
                arrstr = (s_ % 3).toString() + arrstr;
                s_ = Math.floor(s_ / 3);
            }
            __state2str_cache.set(s, arrstr);
        }
        return __state2str_cache.get(s);
    }

    let __countState_cache = new Map();
    let countState = (s) => {
        if (!__countState_cache.has(s)) {
            let s_ = s;
            let c_introv = 0;
            let c_extrov = 0;
            for (let i = 0; i < n; ++i) {
                let curr = s_ % 3;
                if (curr === 1) ++c_introv;
                else if (curr === 2) ++c_extrov;
                s_ = Math.floor(s_ / 3);
            }
            __countState_cache.set(s, [c_introv, c_extrov]);
        }
        return __countState_cache.get(s);
    }

    let s_max = 3 ** n - 1;

    let getSumDiffFrom2Rows = (s_prev, s) => {
        let diff = 0;
        let s_prev_ = state2str(s_prev);
        let s_ = state2str(s);
        // console.log(`In ${s_prev} ${s} -> ${[s_prev_,s_]}`);
        for (let i = 0; i < n; ++i) {
            if (s_.charAt(i) === "1") {//introvert
                diff += 120;
                //ACTIVE CHANGES TO CURRENT ROW
                if (i - 1 > -1 && s_.charAt(i - 1) !== "0") diff -= 30;
                if (i + 1 < n && s_.charAt(i + 1) !== "0") diff -= 30;
                if (s_prev_.charAt(i) !== "0") diff -= 30;
                //PASSIVE CHANGES TO PREVIOUS ROW
                if (s_prev_.charAt(i) === "1") diff -= 30;
                else if (s_prev_.charAt(i) === "2") diff += 20;

            } else if (s_.charAt(i) === "2") {//extrovert
                diff += 40;
                //ACTIVE CHANGES TO CURRENT ROW
                if (i - 1 > -1 && s_.charAt(i - 1) !== "0") diff += 20;
                if (i + 1 < n && s_.charAt(i + 1) !== "0") diff += 20;
                if (s_prev_.charAt(i) !== "0") diff += 20;
                //PASSIVE CHANGES TO PREVIOUS ROW
                if (s_prev_.charAt(i) === "1") diff -= 30;
                else if (s_prev_.charAt(i) === "2") diff += 20;
            }
        }
        return diff;
    }
    let Dp = Array(m + 1).fill().map(
        () => Array(i_max + 1).fill().map(
            () => Array(e_max + 1).fill().map(
                () => Array(s_max + 1).fill(-Infinity)
            )
        )
    );//4d dp
    Dp[0][0][0][0] = 0;//init driver state

    let ans = 0;//compute answer on the go

    for (let i = 1; i <= m; ++i) {//for each row
        for (let j = 0; j <= i_max; ++j) {//for each possible number of introverts totally
            for (let k = 0; k <= e_max; ++k) {//for each possible number of extroverts totally
                for (let l = 0; l <= s_max; ++l) {//for each current state
                    let [c_introv, c_extrov] = countState(l);
                    if (c_introv > j || c_extrov > k) continue;//cut path
                    let c_introv_prev = -c_introv + j;
                    let c_extrov_prev = -c_extrov + k;
                    for (let o = 0; o <= s_max; ++o) {//for each previous state
                        if (Dp[i - 1][c_introv_prev][c_extrov_prev][o] === -Infinity) continue;//cut path
                        let _dp = Dp[i - 1][c_introv_prev][c_extrov_prev][o] + getSumDiffFrom2Rows(o, l);
                        if (_dp >= Dp[i][j][k][l]) {
                               // console.log(`Dp[${i}][${j}][${k}][${l}] = ${_dp} PREV S ${o} | ${getSumDiffFrom2Rows(o, l)}`)
                            Dp[i][j][k][l] = _dp
                        };
                        if (i === m && _dp > ans) {
                            ans = _dp
                        };
                    }
                }
            }
        }
    }
    return ans;
};

console.log(getMaxGridHappiness(5, 3, 3, 6));