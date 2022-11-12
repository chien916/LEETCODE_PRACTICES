/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // 边缘条件遗漏：万一最后面有空格怎么办
    // return s.length-1-s.lastIndexOf(' ');
    let toReturn = 0;
    let endCharacterIndex = s.length - 1;
    while (endCharacterIndex > 0 && s.charAt(endCharacterIndex) === ' ')
        --endCharacterIndex;
    let spaceBeforeWordIndex = endCharacterIndex;
    // 概念：索引值的值域
    // 索引值分两种，一种是专门指向有效值的，另一种是专门指向无效值的
    // 指向无效值的可以为-1或者length，有效值则不能
    // while (spaceBeforeWordIndex > 0 && s.charAt(spaceBeforeWordIndex) !== ' ')
    while (spaceBeforeWordIndex >= 0 && s.charAt(spaceBeforeWordIndex) !== ' ')
        --spaceBeforeWordIndex;

    toReturn = endCharacterIndex-spaceBeforeWordIndex;
    return toReturn;
};

console.log(lengthOfLastWord("  1"))