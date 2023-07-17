/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (V) {
    //[color index,number of boxes]
    let V_ = [];
    for (let [l, r] = [0, 0]; l < V.length;) {
        while (r < V.length && V[l] === V[r]) {
            ++r;
        }
        V_.push([V[l], r - l]);
        l = r;
    }
    //console.log(V_.map((V) => ["T" + V[0], V[1]].join(",")));
    //let C_dfs = new Map();
    let C_dfs = Array(101 ** 3).fill(null);

    // //init driver (single element with no suffix)
    // for (let i = 0; i < V_.length; ++i) {
    //     let key = `${i},${i},${0}`;
    //     C_dfs.set(key, V_[i][1] ** 2);
    // }

    let dfs = (i, j, k, _cs = 0) => {
        let _pcs = "".padStart(_cs * 2, " ");
        /**
         * prereq for calling dfs:
         * V_[j][0] = k-representing value
         * i<=j
         * i: beginning index
         * j: ending index inclusive
         * k: number of suffix (suffixs should equal to j)
         */
        let key = `${i},${j},${k}`;
        let ind = (101 ** 2) * i + 101 * j + k;
        // console.log(_pcs + `dfs(${i},${j},${k}){`)
        if (C_dfs[ind] === null) {
            let ans = 0;
            let _dp_1 = ((j - 1 >= i) ? dfs(i, j - 1, 0, _cs + 1) : 0) + ((V_[j][1] + k) ** 2);
            //console.log(_pcs + " " + `@Direct Connect T${V_[j][0]} of occurances of ${V_[j][1]} with k=${k} generates ${_dp_1}`)
            let _dp_2 = 0;
            for (let l = i; l < j; ++l) {//pivot
                if (V_[l][0] === V_[j][0]) {
                    let __dp_2 =
                        dfs(i, l, k + V_[j][1], _cs + 1) +
                        dfs(l + 1, j - 1, 0, _cs + 1);
                    //console.log(_pcs + " " + `@Pivot ${V_[l][0]} of occurances of ${V_[l][1]} with k=${k} generates ${__dp_2}`)
                    if (__dp_2 > _dp_2) _dp_2 = __dp_2;
                }
            }
            ans = (_dp_1 > _dp_2) ? _dp_1 : _dp_2;
            C_dfs[ind] = ans;
        }
        //console.log(_pcs + `} = ${C_dfs.get(key)} `)
        return C_dfs[ind];
    }
    let ans = dfs(0, V_.length - 1, 0);
    return ans;
};

console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]))