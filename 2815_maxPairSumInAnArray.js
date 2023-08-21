/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (V) {
    let V_md = V.map((n) => {
        let n_backup = n;
        let n_md = 0;
        while (n) {
            if (n % 10 > n_md) n_md = n % 10;
            n = Math.floor(n / 10);
        }
        return [n_backup, n_md];
    }).sort((A, B) => {
        if (A[1] !== B[1]) return -(A[1] - B[1]);
        else return -(A[0] - B[0]);
    });
    //console.log(V_md.map((V)=>V.join("|")))
    let a = -1;
    for (let i = 1; i < V_md.length; ++i) {
        if (V_md[i][1] === V_md[i - 1][1]) {
            a = Math.max(a,V_md[i][0] + V_md[i - 1][0]);
        }
    }
    return a;
};