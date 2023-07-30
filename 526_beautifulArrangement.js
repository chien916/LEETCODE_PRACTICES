/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    let s_max = (1 << n) - 1;
    let Dp = Array(s_max + 1).fill(0);
    let g_pc = (n, a = 0) => {//pop count
        while (n) {
            n &= (n - 1);
            ++a;
        }
        return a;
    }
    Dp[0] = 1;
    for (let i = 1; i <= n; ++i) {//for how many digits !after operation!
        let Dp_ = [...Dp];
        for (let j = 0; j <= s_max; ++j) {//for all states with digit count = how many digits
            //digit count can be counted by how many number is used
            if (g_pc(j) !== i - 1 || Dp[j] === 0) continue;
            for (let k = 0; k < n; ++k) {//fill which number at index i?
                if (j & (1 << k)) continue;//number is already used -> cannot use 1 number twice
                if ((i) % (k + 1) === 0 || (k + 1) % (i) === 0) {
                    Dp_[j | (1 << k)] += Dp[j];
                }
            }
        }
        Dp = Dp_;
    }
    return Dp[s_max];
};

console.log(countArrangement(2))