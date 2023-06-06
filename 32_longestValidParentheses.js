/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    //stack stores the index of last left parenthesis
    //use the index to determine the length of valid string
    let _stack_a = [-1];
    //stack stores the CURRENT VALID RANGE BEGINNING
    let _ret_n = 0;
    [...s].forEach((it_s, ind_n) => {
        if (it_s === "(")
            _stack_a.push(ind_n);
        else {
            _stack_a.pop();
            if (_stack_a.length === 0) _stack_a.push(ind_n);
            else _ret_n = Math.max(_ret_n, ind_n - _stack_a[_stack_a.length - 1]);
        }

        //error 1 : do NOT store invalid pair into the stack
        // else
        //     _stack_a.push(ind_n);

    });
    return _ret_n;
};

a = longestValidParentheses(")()())");
console.log(a)