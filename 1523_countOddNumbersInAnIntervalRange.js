/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    return ((high - low) >> 1) + ((low & 1) | (high & 1 ));
};