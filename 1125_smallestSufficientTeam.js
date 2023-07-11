/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (A_r, M_p) {
    let l_r = A_r.length;
    let l_p = M_p.length;

    //required skill name to index
    let M_s = new Map();
    for (let i = 0; i < l_r; ++i) {
        M_s.set(A_r[i], i);
    }

};