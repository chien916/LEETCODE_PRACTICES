/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (V_t) {
    let T = [];
    for (let i = 0; i < V_t.length; ++i) {
        if (!isNaN(parseInt(V_t[i]))) {
            T.push(parseInt(V_t[i]));
        } else {
            let n_r = T.pop();
            let n_l = T.pop();
            let n;
            if (V_t[i] === "+") n = n_l + n_r;
            else if (V_t[i] === "-") n = n_l - n_r;
            else if (V_t[i] === "*") n = n_l * n_r;
            else if (V_t[i] === "/") {
                n = (n_l / n_r);
                if (n < 0) n = Math.ceil(n);
                else n = Math.floor(n);
            }
            // console.log(`${n_l} ${V_t[i]} ${n_r} = ${n}`);
            T.push(n);
        }
    }
    return T[0];
};