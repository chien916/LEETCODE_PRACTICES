/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let i = 0;
    let S = [];
    let c = 0;
    while (i < s.length) {
        if (s.charAt(i) === "(") {
            S.push(c);
            c = 0;
        } else {
            c = S.pop() + Math.max(1, c << 1);
        }
        ++i;
    }
    return c;
};

//scoreOfParentheses("()")