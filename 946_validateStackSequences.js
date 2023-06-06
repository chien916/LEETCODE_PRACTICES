/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let _stack_a = [];
    for (let _pushed_n of pushed) {
        _stack_a.push(_pushed_n);
        while (popped.length > 0 && _stack_a.length > 0 && popped[0] === _stack_a[_stack_a.length - 1]) {
            _stack_a.pop();
            popped.shift();
        }
    }
    return popped.length === 0;
};