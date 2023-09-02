
var MyQueue = function () {
    this.A = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.A.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.A.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.empty()) return null;
    else return this.A[this.A.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.A.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */