/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (V) {
    let l_v = V.length;
    let Dp = Array(l_v).fill().map(
        () => new Map()
    );
    for (let i = 0; i < l_v; ++i) {//x
        for (let j = 0; j < i; ++j) {//y
            let d = V[i] - V[j];
            //no seq ends with V[j] having diff of d
            if (Dp[j].has(d) === false) {
                Dp[i].set(d, 2);//length of seq
            } else {//already have
                Dp[i].set(d, Dp[j].get(d) + 1);
            }
        }
    }
    let a = 0;
    for (let i = 0; i < l_v; ++i) {
        a = Math.max(a,...([...Dp[i]].map(E=>E[1])));
    }
    return a;
};
console.log(longestArithSeqLength([3,6,9,12]))