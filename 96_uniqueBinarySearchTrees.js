/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    /**
     * DP::CATALAN
     * Dp[i] => number of ways to form BSTs from num range 1:i inclusively
     * => this can apply to n+1:n+i as the number of ways to form bst
     * from 1:3 is the same as 4:6
     */
    let len = n;
    let Dp = Array(len + 1).fill(1);
    for (let i = 1; i <= len; ++i) {
        let c = 0;
        for (let j = 1; j <= i; ++j) {
            //I need 1:j-1 and j+1:i 
            //2nd field: I need j+1:i which is 1:i-j
            let c_l = (j - 1 >= 1) ? Dp[j - 1] : 1;
            let c_r = (j + 1 <= i) ? Dp[i - j] : 1;
            c += c_l * c_r;
            //console.log(`Pivot: ${j} , Left [1:${j - 1}]: ${c_l} , Right [${j + 1},${i}: ${c_r}]`);
        }
        Dp[i] = c;
        //console.log(`the number of structurally unique BST' from 1 to ${i} is ${Dp[i]}`);
    }
    return Dp[Dp.length-1];
};