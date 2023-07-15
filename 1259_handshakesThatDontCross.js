/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function (n) {
    let Dp = Array(n + 1).fill(0);
    let m = BigInt(1e9 + 7);
    Dp[0] = 1n;
    Dp[2] = 1n;
    for (let i = 4; i <= n; i += 2) {//number of people
        let _dp = 0n;
        for (let j = 2; j <= i; j += 2) {
            //1 is the pivot start , j is the pivot end
            //2:j-1 is on the right and j+1:i is on the left
            let c_l = Dp[j - 2];//(j-2)-1 +1 =j-2 
            let c_r = Dp[i - j];//i-(j+1)+1 = i-j-1+1 = i-j
            //  console.log(`i->${i} j->${j} c_l->${c_l} c_r->${c_r}`);
            _dp = _dp + (c_l * c_r);
        }
        Dp[i] = _dp;
    }
    return Number(Dp[n] % m);
}