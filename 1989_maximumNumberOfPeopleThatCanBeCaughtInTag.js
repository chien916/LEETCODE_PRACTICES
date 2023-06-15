/**
 * @param {number[]} team
 * @param {number} dist
 * @return {number}
 */
var catchMaximumAmountofPeople = function (team, dist) {
    //indices of NOT_IT with left index on the right
    let nItsInds_a = [];
    let _ret_n = 0;
    for (let i_n = team.length - 1; i_n >= 0; --i_n)
        if (team[i_n] === 0) nItsInds_a.push(i_n);
    for (let i_n = 0; i_n < team.length; ++i_n) {
        if (team[i_n] === 1) {
            let range_a = [i_n - dist, i_n + dist];
            //pop all unreachable ones
            while (nItsInds_a.length > 0
                && nItsInds_a[nItsInds_a.length - 1] < range_a[0]) nItsInds_a.pop();
            //pop ONE reachable one 
            if (nItsInds_a.length > 0
                && nItsInds_a[nItsInds_a.length - 1] <= range_a[1]) {
                nItsInds_a.pop();
                ++_ret_n;
            }
        }
    }
    return _ret_n;
};