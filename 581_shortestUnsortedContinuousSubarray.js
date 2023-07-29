/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (V_n) {
    let S_i = [];
    let S_d = [];
    let l_n = V_n.length;
    let [i_l, i_r] = [l_n,-1 ];

    for (let i = 0; i < l_n; ++i) {
        while (S_i.length > 0 && V_n[i] < V_n[S_i[S_i.length - 1]]) {
            i_l = Math.min(i_l, S_i.pop());
        }
        S_i.push(i);
    }
    for (let i = l_n - 1; i > -1; --i) {
        while (S_d.length > 0 && V_n[i] > V_n[S_d[S_d.length - 1]]) {//err 1
            i_r = Math.max(i_r, S_d.pop());
        }
        S_d.push(i);
    }
    if(i_r === -1) return 0;
    return i_r - i_l + 1;
};

console.log(findUnsortedSubarray([1,2,3,4]))