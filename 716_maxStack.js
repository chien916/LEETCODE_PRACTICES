var MaxStack = function () {
    this.bag_a = [];//[val,removed,id]
    this.currId_n = Number.MIN_SAFE_INTEGER;
    this.pq = new PriorityQueue({
        //[val,removed,id] max heap
        compare: (a_a, b_a) => {
            let diff_n = -(a_a[0] - b_a[0]);
            if (diff_n == 0) diff_n = -(a_a[2] - a_a[0]);
            return diff_n;

        }
    });
    this.clean_f = () => {
        while (this.bag_a.length > 0 && this.bag_a[this.bag_a.length - 1][1])
            this.bag_a.pop();
        while (this.pq.size() > 0 && this.pq.front()[1])
            this.pq.dequeue();
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    let _val_a = [x, false, this.currId_n++];
    this.pq.enqueue(_val_a);
    this.bag_a.push(_val_a);
    //pq and bag element points to the same reference
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    this.clean_f();//disgard all delayed pops
    //actual popping process from bag
    if (this.bag_a.length === 0) return null;
    this.bag_a[this.bag_a.length - 1][1] = true;//mark as popped
    return this.bag_a.pop()[0];
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    this.clean_f();//disgard all delayed pops
    if (this.bag_a.length === 0) return null;
    return this.bag_a[this.bag_a.length - 1][0];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    this.clean_f();//disgard all delayed pops
    if (this.pq.size() === 0) return null;
    return this.pq.front()[0];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    this.clean_f();//disgard all delayed pops
    if (this.pq.size() === 0) return null;
    this.pq.front()[1] = true;//marked as popped for bag
    return this.pq.dequeue()[0];
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

//优先队列结构定义
let util = require("./_util");
let PriorityQueue = util.PriorityQueue;


// //设计问题结构定义
let formDesignExpr = util.formDesignExpr;
let evalDesignExpr = util.evalDesignExpr;

let arg1 = ["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"];
let arg2 = [[], [5], [1], [5], [], [], [], [], [], []];
[i, e] = formDesignExpr(arg1, arg2, "_I");
let _I = eval(i);
for (let _e of e) {
    let __e = _e;
    let ret = eval(_e);
    let i = 0;
}