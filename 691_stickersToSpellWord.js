/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (S, t) {
    let l_s = S.length;
    let getInd = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0);
    //M[i][j] -> Number of letters /j in S[i]
    let M = Array(S.length).fill().map(
        () => Array(26).fill(0)
    );
    for (let i = 0; i < l_s; ++i) {
        for (let j = 0; j < S[i].length; ++j) {
            ++M[i][getInd(S[i].charAt(j))];
        }
    }
    let __stateToString = (__i, __str) => {
        __str = [...__str].reverse();
        let __ret__str = "";
        for (let i = 0; i < __str.length; ++i) {
            if ((__i & (1 << i)) > 0) __ret__str = __str[i] + __ret__str;
            else __ret__str = "*" + __ret__str;
        }
        return __ret__str;
    }
    /**
     * DP::KNAPSACK::COMPRESSION
     * Dp[i][j] 
     */
    let l_dp = (1 << t.length);//how many states
    let l_t = t.length;//number of chars
    let Dp = Array(l_dp).fill(Infinity);
    Dp[0] = 0;//init state -> 0 way to form empty array
    for (let i = 0; i < l_dp; ++i) {//for each state
       // console.log(`--- STATE ${__stateToString(i,t)} ---\n`)
        for (let j = 0; j < l_s; ++j) {//using each stickers
            let i_ = i;//new state aftr using this sticker
            let M_ = [...(M[j])];//helper map
            for (let k = 0; k < l_t; ++k) {//for each letter from back
                if (i & (1 << k)) continue;
                let c = getInd(t.charAt(l_t - 1 - k));//cc of corresponding letter in target
                
                if (M_[c] > 0) {
                    i_ |= (1 << k);
                    --M_[c];
                }
                //set future state from current state
                Dp[i_] = Math.min(Dp[i_], Dp[i] + 1);
            }

            {//debug
                console.log(`Using '${S[j]}' makes ${__stateToString(i, t)} into ${__stateToString(i_, t)}`);
                console.log(`Dp[${__stateToString(i_, t)} = ${Dp[i_]}]`);
            }
        }
    }
    /**
     * Dp[]
     */
    let ans = Dp[l_dp - 1];
    if (ans === Infinity) ans = -1;
    return ans;
};

console.log(minStickers(["with", "example", "science"], "thehat"))