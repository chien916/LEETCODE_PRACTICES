/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let smallestInd_n = -1;
    for (let i_n = 0; i_n < letters.length; ++i_n) {
        if (letters[i_n].charCodeAt(0) > target.charCodeAt(0)
            && (smallestInd_n === -1 || letters[i_n].charCodeAt(0) < letters[smallestInd_n].charCodeAt(0)))
            smallestInd_n = i_n;
    }
    return smallestInd_n === -1 ? letters[0] : letters[smallestInd_n];

};