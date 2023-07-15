/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
    let s_max = (3 ** 3) - 1;
    let i_max = n;


    let _C_to_string = new Map();
    let to_string = (s) => {
        let key = s.toString();
        if (!_C_to_string.has(key)) {
            let ans = "";
            for (let i = 0; i < 3; ++i) {
                ans = ans + (s % 3).toString();
                s = Math.floor(s / 3);
            }
            _C_to_string.set(key, ans);
        }
        return _C_to_string.get(key);
    }

    let _C_check = new Map();
    let check = (s_p, s, single = false) => {
        let key = [s_p, s].join("|");
        if (!_C_check.has(key)) {
            let s_p_ = to_string(s_p);
            let s_ = to_string(s);
            let ans = true;
            for (let i = 0; ans && i < 3; ++i) {
                if (i - 1 > -1 && s_.charCodeAt(i) === s_.charCodeAt(i - 1)) ans = false;
                if (i + 1 < 3 && s_.charCodeAt(i) === s_.charCodeAt(i + 1)) ans = false;
                if (!single && s_.charCodeAt(i) === s_p_.charCodeAt(i)) ans = false;
            }
            _C_check.set(key, ans);
        }
        return _C_check.get(key);
    }

    let Dp = Array(i_max).fill().map(
        () => Array(s_max + 1).fill().map(
            () => 0n
        )
    );

    for (let i = 0; i <= s_max; ++i) {
        if (!check("", i, true)) continue;
        Dp[0][i] = 1n;
    }

    for (let i = 1; i < i_max; ++i) {//for each row
        for (let j = 0; j <= s_max; ++j) {//for each current state
            for (let k = 0; k <= s_max; ++k) {//for each previous state
                if (!Dp[i - 1][k]) continue;//this previous state is unreachable
                if (!check(k, j)) continue;//this current state conflicts with this previous state
                //console.log(`i=${i} j=${to_string(j)} k=${to_string(k)} -> ${Dp[i][j]} + ${Dp[i - 1][k]} = ${Dp[i][j] + Dp[i - 1][k]}`)
                Dp[i][j] += Dp[i - 1][k];
                //if (i === i_max && Dp[i][j] > ans) ans = Dp[i][j];
            }
        }
    }
    let ans = 0n;
    for (let i = 0; i <= s_max; ++i) {
        ans += Dp[i_max - 1][i];
    }
    return Number(ans % (BigInt(1e9 + 7)));
};

console.log(numOfWays(5000))