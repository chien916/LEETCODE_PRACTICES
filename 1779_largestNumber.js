/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (V_n) {
    let a = V_n.sort((s_1, s_2) =>
        `${s_1}${s_2}`.localeCompare(`${s_2}${s_1}`)
    ).reverse().join("");
    if (a.charAt(0) === "0" && a.length > 1) {
        let i = 1;
        for (; i < a.length - 1 && a.charAt(i) === "0"; ++i) {
        }
        a = a.slice(i);
    }
    return a;
};
