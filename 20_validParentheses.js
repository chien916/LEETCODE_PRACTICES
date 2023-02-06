/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr_nA = [];
    for (let c_s of s) {
        if (c_s === "(") {
            arr_nA.push(0);
        } else if (c_s === "[") {
            arr_nA.push(1);
        } else if (c_s === "{") {
            arr_nA.push(2);
        } else if (c_s === ")") {
            if (arr_nA.length === 0 || arr_nA[arr_nA.length - 1] !== 0) return false;
            else arr_nA.pop();
        } else if (c_s === "]") {
            if (arr_nA.length === 0 || arr_nA[arr_nA.length - 1] !== 1) return false;
            else arr_nA.pop();
        } else if (c_s === "}") {
            if (arr_nA.length === 0 || arr_nA[arr_nA.length - 1] !== 2) return false;
            else arr_nA.pop();
        }
    }
    return arr_nA.length === 0;
};

console.log(isValid("({()([])})"));