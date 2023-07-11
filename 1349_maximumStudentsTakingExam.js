/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (M_s) {

    let l_m = M_s.length;
    let l_a = M_s[0].length;
    let s_max = (1 << l_a) - 1;

    let M_b = Array(l_m).fill(0);
    for (let i = 0; i < l_m; ++i) {
        let A_s = M_s[i];
        for (let j = 0; j < A_s.length; ++j) {
            if (M_s[i][j] === '#') {
                M_b[i] |= (1 << j);
            }
        }
    }

    //let __C_popCount = new Map();
    let __popCount = (s) => {
        //  if (!__C_popCount.has(s)) {
        let _s = s;
        let c = 0;
        while (_s) {
            _s &= (_s - 1);
            ++c;
        }
        return c;
        //__C_popCount.set(s, c);
        //}
        // return __C_popCount.get(s);
    }

    //let __C_check = new Map();
    let __check = (s_prev, s) => {
        let key = [s_prev, s].join("|");
        // if (!__C_check.has(key)) {
        let ans = true;
        for (let i = 0; ans && i < l_a; ++i) {
            //check current row
            if ((s & (1 << i)) && ((s & (1 << (i - 1))) || (s & (1 << (i + 1))) || (s_prev & (1 << (i - 1))) || (s_prev & (1 << (i + 1))))) {
                ans = false;
            }
        }
        return ans;
        //__C_check.set(key, ans);
        // }
        //return __C_check.get(key);
    }

    // let __toString = (s) => {
    //     return s.toString(2).padStart(l_a, '0').split("").reverse().join("");
    // }

    let Dp = Array(l_m + 1).fill().map(
        () => Array(s_max + 1).fill(0)
    );
    Dp[0][0] = 0;//init driver 
    let ans = 0;//eval answer on the go
    for (let i = 1; i <= l_m; ++i) {//for each row
        for (let j = 0; j <= s_max; ++j) {//for every current state
            if ((j & M_b[i - 1])) continue;//current state contains person on broken seat
            for (let k = 0; k <= s_max; ++k) {//for every previous state
                if (Dp[i - 1][k] === -Infinity) continue;//this previous state cannot be reached
                if (!__check(k, j)) continue;//cheating can happen on the prev and curr configurations
                let _dp = Dp[i - 1][k] + __popCount(j);
                if (_dp > Dp[i][j]) {
                    Dp[i][j] = _dp;
                    // console.log(`R ${i} P ${__toString(k)} C ${__toString(j)} (${__popCount(j)} persons) PDP ${Dp[i - 1][k]} CDP ${Dp[i][j]}`)
                }
                if (i === l_m && _dp > ans) {
                    ans = _dp;
                }
            }
        }
    }
    return ans;
};

console.log(maxStudents([["#", ".", "#", "#", ".", "#"], [".", "#", "#", "#", "#", "."], ["#", ".", "#", "#", ".", "#"]]))