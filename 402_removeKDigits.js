/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    /**
     * error 1 : corner cases when 
     */
    //convert string into int array for convienence
    let chars_A = [...num];
    chars_A.push("/");//to handle monotonically increasing original string
    const CHARSREF_A = [...chars_A];
    //
    let incrStack_n = [];
    for (let i_n = 0; i_n < CHARSREF_A.length; ++i_n) {
        while (incrStack_n.length > 0
            && CHARSREF_A[i_n].charCodeAt(0) < CHARSREF_A[incrStack_n[incrStack_n.length - 1]].charCodeAt(0)
            && k-- > 0) {
            let indToRem_n = incrStack_n.pop();
            chars_A[indToRem_n] = "";
        }
        incrStack_n.push(i_n);
    }
    //handles monotonically increasing original string
    //trim trailing zero or empty characters
    while (chars_A.length > 0 && (chars_A[0] === "0" || chars_A[0] === "")) chars_A.shift();
    return chars_A.slice(0, -1).join("").padStart(1,"0");
};

console.log(removeKdigits("9",1))