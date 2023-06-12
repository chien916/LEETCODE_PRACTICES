/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
    const _BOUND_A = [BigInt(left), BigInt(right)];
    const _CHECKBOUND_A
        = [10n ** BigInt(Math.max(0, Math.floor(left.length / 4 - 1)))
            , 10n ** BigInt(Math.max(0, Math.floor(right.length / 4 + 1)))];

    // /**
    //  * 1. enumerate all HALF PALINDROM
    //  * 2. form full palindrom
    //  * 3. test square
    //  */
    // /**Newton's Method Sqrt Find */
    // const _SQRT_f = (n_i, prev_i) => {
    //     if (n_i < 2n) return n_i;
    //     if (n_i === 4n) return 2n;
    //     let next_i = ((n_i / prev_i) + prev_i) >> 1n;
    //     let diff_i = next_i - prev_i;
    //     if (diff_i === 0n || diff_i === 1n) return prev_i;
    //     else return _SQRT_f(n_i, next_i);
    // }


    let _ret_n = 0;
    for (let cHp_i = _CHECKBOUND_A[0]; cHp_i <= _CHECKBOUND_A[1]; ++cHp_i) {
        //form full palindrom (two ways)
        for (let ctrl_n = 0; ctrl_n <= 1; ++ctrl_n) {
            let cFp_i = BigInt(cHp_i.toString() + cHp_i.toString().split("").reverse().join("").substring(ctrl_n));
            let cSquared_i = cFp_i ** 2n;
            if (cSquared_i.toString() === cSquared_i.toString().split("").reverse().join("")
                && cSquared_i >= _BOUND_A[0] && cSquared_i <= _BOUND_A[1]
            ) {

                ++_ret_n;
            }
        }
    }
    return _ret_n;

};


console.log(superpalindromesInRange("40000000000000000", "50000000000000000"))