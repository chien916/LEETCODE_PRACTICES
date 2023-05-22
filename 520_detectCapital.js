/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let isCapitcal_f = function (cc_n) {
        return cc_n >= "A".charCodeAt(0) && cc_n <= "Z".charCodeAt(0);
    }
    let firstIsCapital_b = isCapitcal_f(word.charCodeAt(0));
    let secondIsCapital_b = null;
    let allOthersTheSameAsSecond_b = true;
    for (let i_n = 1; i_n < word.length; ++i_n) {
        let currCc_n = word.charCodeAt(i_n);
        if (secondIsCapital_b===null) secondIsCapital_b = isCapitcal_f(currCc_n);
        else
            allOthersTheSameAsSecond_b = allOthersTheSameAsSecond_b && (secondIsCapital_b === isCapitcal_f(currCc_n));
    }
    if(!firstIsCapital_b&&secondIsCapital_b) return false;
    return ((secondIsCapital_b===null) ? true : (allOthersTheSameAsSecond_b));
};
console.log(detectCapitalUse("FlaG"))
