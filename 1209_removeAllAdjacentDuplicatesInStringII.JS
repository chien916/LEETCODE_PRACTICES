/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack_nAA = [];
    for (let i_n = 0; i_n < s.length; ++i_n) {
        let currCharCode_n = s.charCodeAt(i_n);
        if (stack_nAA.length === 0 || stack_nAA[stack_nAA.length - 1][0] !== currCharCode_n) {
            stack_nAA.push([currCharCode_n, 1]);
        } else {
            stack_nAA[stack_nAA.length - 1][1] += 1;
        }
        if(stack_nAA[stack_nAA.length-1][1]===k) 
            stack_nAA.pop();
    }
    let toReturn_s = stack_nAA.map(it_nA=>String.fromCharCode(it_nA[0]).repeat(it_nA[1])).join("");
    return toReturn_s;
};

removeDuplicates("deeedbbcccbdaa",3)