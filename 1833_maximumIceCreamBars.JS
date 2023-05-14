/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    /**
     * Modified counting sort: use the value in array as "INDEX"
     */
    //first iteration: convert costs into couting-based array:
    let cbArr_A = Array();
    for (let it_n of costs) {
        if (cbArr_A[it_n] === undefined) cbArr_A[it_n] = 1;
        else cbArr_A[it_n] += 1;
    }
    //second iteration: buy ice cream from the cheapest till all coins are used
    let iceCreamBought_n = 0;
    for (let i_n = 0; i_n < cbArr_A.length; ++i_n) {
        if (cbArr_A[i_n] === undefined) continue;
        if (coins >= cbArr_A[i_n] * i_n) {
            coins -= cbArr_A[i_n] * i_n;
            iceCreamBought_n += cbArr_A[i_n];
        } else {
            let n_n = Math.floor(coins / i_n);
            coins -= n_n * i_n;
            iceCreamBought_n += n_n;
            break;
        }
    }
    return iceCreamBought_n;
};

console.log(maxIceCream([1,3,2,4,1], 7))

