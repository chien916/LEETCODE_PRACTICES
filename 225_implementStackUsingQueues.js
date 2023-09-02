
var MyStack = function () {
    this.A = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.A.push(x);
   // console.log(this.A)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.A.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.empty()) return null;
    else return this.A[this.A.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.A.length;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */