/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
    let l_s = s.length;
    let A = Array(l_s + 1).fill().map((_, i) => i + 1);
    for (let i = 0; i < l_s;) {
        if (s.charAt(i) === "I") {
            ++i;
            continue;
        }
        let i_ = i + 1;
        while (i_ < l_s && s.charAt(i_) === "D") { ++i_; }
        A = A.slice(0, i).concat(A.slice(i, i_ + 1).reverse()).concat(A.slice(i_ + 1));
        i = i_ + 1;
    }
    return A;
};

findPermutation("DI")