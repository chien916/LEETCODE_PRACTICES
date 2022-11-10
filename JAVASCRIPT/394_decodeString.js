/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let multiplierStack = [];
    let stringStack = [];
    let currentMultiplier = "";
    let currentString = "";
    s = "1[" + s + "]";
    for (let ind = 0; ind < s.length; ++ind) {
        let currentCharacter = s.charAt(ind);
        if (currentCharacter >= '0' && currentCharacter <= '9') {
            currentMultiplier += currentCharacter;
        } else if (currentCharacter >= 'a' && currentCharacter <= 'z'
            || currentCharacter >= 'A' && currentCharacter <= 'Z') {
            currentString += currentCharacter;
        } else if (currentCharacter === '[') {
            multiplierStack.push(parseInt(currentMultiplier));
            currentMultiplier = "";
            stringStack.push(currentString);
            currentString = "";
        } else if (currentCharacter === ']') {
            currentString = stringStack.pop()+currentString.repeat(multiplierStack.pop());
        }
    }
    return currentString;
};

