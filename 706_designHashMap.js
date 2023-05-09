var MyHashMap = function () {
    this.hashCapacity_n = 2048;
    this.hashFunction_f = (key_n) => key_n % this.hashCapacity_n;
    this.hashContainer_A = Array(this.hashCapacity_n).fill().map(() => []);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (this.get(key) !== -1)
        this.remove(key);
    this.hashContainer_A[this.hashFunction_f(key)].push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let queriedPair = this.hashContainer_A[this.hashFunction_f(key)].find((it => it[0] === key));
    if (queriedPair === undefined) return -1;
    else return queriedPair[1];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.hashContainer_A[this.hashFunction_f(key)]
        = this.hashContainer_A[this.hashFunction_f(key)].filter((it) => it[0] !== key);//filter CREATES AN COPY!
};



let a = new MyHashMap();
a.put(1, 1);
console.log(a.get(1));
a.put(1, 2);
console.log(a.get(1));



let i = 0;
