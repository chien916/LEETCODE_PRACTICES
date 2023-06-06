var MinStack = function () {
    this.bag_a = [];
    this.min_a = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.bag_a.push(val);
    if (this.min_a.length === 0) this.min_a.push(val);
    else this.min_a.push(Math.min(this.min_a[this.min_a.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.bag_a.pop();
    this.min_a.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.bag_a.length === 0) return null;
    else return this.bag_a[this.bag_a.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.min_a.length === 0) return null;
    else return this.min_a[this.min_a.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */