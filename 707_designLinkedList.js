var MyLinkedList = function () {
    this.count_n = 0;
    this.head_A = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index > this.count_n - 1) return -1;
    let curr_A = this.head_A;
    for (; curr_A[1]; curr_A = curr_A[1]) { if (index-- === 0) break; }
    return curr_A[0];
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.head_A = [val, this.head_A];
    ++this.count_n;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.head_A) {
        let curr_A = this.head_A;
        for (; curr_A[1]; curr_A = curr_A[1]) { }
        curr_A[1] = [val, null];
    } else {
        this.head_A = [val, null];
    }
    ++this.count_n;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.count_n) return;
    else if (index === this.count_n) this.addAtTail(val);
    else if (index === 0) this.addAtHead(val);
    else {
        let curr_A = this.head_A;
        for (; curr_A[1]; curr_A = curr_A[1]) { if (index-- === 1) break; }
        curr_A[1] = [val, curr_A[1]];
    }

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.count_n) return;
    else if (index === 0) this.head_A = this.head_A[1];
    else {
        let curr_A = this.head_A;
        for (; curr_A[1]; curr_A = curr_A[1]) { if (index-- === 1) break; }
        curr_A[1] = curr_A[1][1];
    }
};

let LL = new MyLinkedList();
LL.addAtHead(1);
LL.addAtTail(3);
LL.addAtIndex(1, 2);
LL.get(1);
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */