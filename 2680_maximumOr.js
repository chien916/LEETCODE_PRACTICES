/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (V, k) {
    /**
     * It always yeild the maximum value if we
     * apply k operations to the same number.
     * 
     *  */
    let l_v = V.length;
    let S_pre = Array(l_v);
    S_pre[0] = BigInt(V[0]);
    for (let i = 1; i < l_v; ++i) {
        S_pre[i] = S_pre[i - 1] | BigInt(V[i]);
    }
    let S_post = Array(l_v);
    S_post[l_v - 1] = BigInt(V[l_v - 1]);
    for (let i = l_v - 2; i > -1; --i) {
        S_post[i] = S_post[i + 1] | BigInt(V[i]);
    }
    //  console.log(S_pre)
    let ans = BigInt(Number.MIN_SAFE_INTEGER);
    for (let i = 0; i < l_v; ++i) {
        let s_pre = (i - 1 > -1) ? S_pre[i - 1] : 0n;
        let s_post = (i + 1 < l_v) ? S_post[i + 1] : 0n;
        let _ans = (s_pre | (BigInt(V[i]) << BigInt(k)) | s_post);
        // console.log(`${s_pre}|${V[i] << k}|${s_post}`)
        if (_ans > ans) ans = _ans;
    }
    return Number(ans);
}; 