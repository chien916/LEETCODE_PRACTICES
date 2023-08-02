/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let S = s.split(" ").map((s) => s.trim()).map((s) => s.replaceAll(" ", ""));
    for (let i = S.length; i > -1; --i) {
        if (S[i] === "") S.splice(i, 1);
    }
    s = S.reverse().join(" ").trim();
    return s;

    //     .reverse()
    // .join(" ")
    // .trim();
};