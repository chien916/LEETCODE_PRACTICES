/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let cursorInd_n = 0;
    for (let lInd_n = 0; lInd_n < chars.length;) {
        let rInd_n = lInd_n;
        for (; chars[lInd_n] === chars[rInd_n]; ++rInd_n) { }
        let indDiff_n = rInd_n - lInd_n;
        if (indDiff_n === 1) {
            chars[cursorInd_n++] = chars[lInd_n];
        }
        else {
            let numericalsDigitsNeeded_n = Math.floor(Math.log10(indDiff_n)) + 1;
            chars[cursorInd_n++] = chars[lInd_n];
            for (; numericalsDigitsNeeded_n > 0; --numericalsDigitsNeeded_n) {
                chars[cursorInd_n++] = Math.floor(indDiff_n / Math.pow(10, numericalsDigitsNeeded_n - 1)).toString();
                indDiff_n %= Math.pow(10, numericalsDigitsNeeded_n - 1);
            }
        }
        lInd_n = rInd_n;
    }
    return cursorInd_n;
};

console.log(compress(["o","o","o","o","o","o","o","o","o","o"]));