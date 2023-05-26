/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
    /**
     * form dictionary for fast query
     * dict[i][c] denotes the number of occurances 
     * of character c at index i from words
     */
    let dict_A = Array(words[0].length).fill().map(() => Array(26).fill(0));
    const CCS_n = "a".charCodeAt(0);
    const MOD_n = 1e9 + 7;
    words.forEach((s) => {
        [...s].forEach((s, n) => {
            dict_A[n][s.charCodeAt(0) - CCS_n] += 1;
        });
    });
    /**
     * dfs(i,j) 
     * i -> current index of target
     * j -> currend index of words
     * defines as number of ways to form target[i:] using words[j:]
     * -1 initial value being uninitalized
     */
    let cache_A = Array(target.length).fill().map(() => Array(words[0].length).fill(-1));
    let dfs_f = (i_n, j_n) => {
        if (!(i_n < target.length)) return 1;
        if (!(j_n < words[0].length)) return 0;
        if (cache_A[i_n][j_n] < 0) {
            cache_A[i_n][j_n]
                = (dfs_f(i_n, j_n + 1) % MOD_n
                    + (dict_A[j_n][target.charCodeAt(i_n) - CCS_n] * dfs_f(i_n + 1, j_n + 1)) % MOD_n) % MOD_n;
        }
        return cache_A[i_n][j_n];
    };
    return dfs_f(0, 0);

};

console.log(numWays(["acca", "bbbb", "caca"], "aba"))