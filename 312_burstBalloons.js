/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (V) {
    /**
     * DP::INTERVAL_2 
     * Length being first loop
     * Begin iterator being the second loop
     * State transfer only requires state of shorter length -> okay
     */
    let l_ori = V.length;
    V = [1, ...V, 1];//append front & end helper
    let l_adj = V.length;
    let Dp = Array(l_adj).fill().map(
        () => Array(l_adj).fill(0)
    );
    /**
     * original length = 4
     * adjusted length = 6
     * ! 0 1 2 3 !
     * length should be capped to original length
     */
    for (let i = 1; i <= l_ori; ++i) {//length of substring
        for (let j = 1; j <= l_ori; ++j) {//beginning of substring
            let k = j + i - 1;//ending of substring (inclusive)
            if (k > l_ori) break;
            //now the substring is [j:k]
            //left and right neighbors are j-1 and k+1
            //both are valid because of helper
            for (l = j; l <= k; ++l) {//last ballon to burst
                let _dp = Dp[j][l - 1] + V[j - 1] * V[l] * V[k + 1] + Dp[l + 1][k];
              //  console.log(`${V.slice(j, k + 1)} -> bursting ${V[l]} gives ${_dp}`)
                if (_dp > Dp[j][k]) Dp[j][k] = _dp;
            }
        }
    }
    return Dp[1][l_adj - 2];
};

//console.log(maxCoins([3, 1, 5, 8]));