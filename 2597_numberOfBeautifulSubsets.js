/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (N, k) {
    /**
     * See absolute difference 
     * -> take mod !
     */
    //mod into map<mod,map<num,count>>
    let M = new Map();
    for (let n of N) {
        let m = n % k;
        if (!M.has(m)) M.set(m, new Map());
        if (!M.get(m).has(n)) M.get(m).set(n, 0);
        M.get(m).set(n, M.get(m).get(n) + 1);
    }
    //  console.log(`${[...M.keys()]} , ${[...M.values()]}`);
    //house robber for each hashmap entries
    /**
     * Dp[i][0] -> number of ways if I skip this number
     * -> ( Dp[i-1][0] + Dp[i-1][1] ) * 1
     * Dp[i][1] -> number of ways if I take this number
     * -> ( Dp[i-1][0] + Dp[i-1][1] ) * (C[i]) IF abs(C[i] - C[i-1])!=k
     * -> ( Dp[i-1][0])*(C[i]) ELSE (non-neighbors are guarenteed to have non k diff)
     * _ans = Dp[Dp.length-1][0] + Dp[Dp.length-1][1]
     */
    let ans = 0;
    for (let [_, M_] of M) {
        let E = [...M_.entries()].sort((E_a, E_b) => E_a[0] - E_b[0]);
        let Dp = Array(E.length).fill().map(() => [0, 0]);
        Dp[0] = [1, (2 ** E[0][1] - 1)];//one way to skip, C[0] way to take as init
        for (let i = 1; i < Dp.length; ++i) {
            Dp[i][0] = (Dp[i - 1][0] + Dp[i - 1][1]) * 1;
            if (Math.abs(E[i][0] - E[i - 1][0]) !== k) {
                Dp[i][1] = (Dp[i - 1][0] + Dp[i - 1][1]) * (2 ** E[i][1] - 1);//err 1 : select any numbers of subelements from array (>0)
            } else {
                Dp[i][1] = (Dp[i - 1][0]) * (2 ** E[i][1] - 1);
            }
        }
        // console.log(`${Dp.map((_) => _[0])} ${Dp.map((_) => _[1])}`)
        ans = Math.max(ans, 1) * (Dp[Dp.length - 1][0] + Dp[Dp.length - 1][1]);
    }
    return ans - 1;//an empty set should be excluded
};