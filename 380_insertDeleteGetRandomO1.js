/**
 * 错误1：
 * Math.random() 会返回一个大于等于0但是小于1的浮点数
 * 随机取一个[0,n]的整数需要用Math.floor(Math.random()*n+1)
 * 如果不加1，那么则永远不会等于n
 */


var RandomizedSet = function () {
    this.indToVal_M = new Map();
    this.valToInd_M = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    let currInd_n = this.indToVal_M.size;
    if (this.valToInd_M.has(val)) { return false; }
    this.valToInd_M.set(val, currInd_n);
    this.indToVal_M.set(currInd_n, val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.valToInd_M.has(val) === false) { return false; }
    let foundInd_n = this.valToInd_M.get(val);
    let lastInd_n = this.indToVal_M.size - 1;
    let lastVal_n = this.indToVal_M.get(lastInd_n);
    if (foundInd_n !== this.indToVal_M.size) {
        //swap the current element and the last element
        this.indToVal_M.set(foundInd_n, lastVal_n);
        this.valToInd_M.set(lastVal_n, foundInd_n);
    }
    this.valToInd_M.delete(val);
    this.indToVal_M.delete(lastInd_n);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let randomInd_n = Math.floor(Math.random() * (this.indToVal_M.size ));
    return this.indToVal_M.get(randomInd_n);
};
