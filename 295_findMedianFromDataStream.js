var MedianFinder = function () {
    this.A = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (n) {
    //bs find first element bigger
    if (this.A.length === 0 || n >= this.A[this.A.length - 1]) this.A.push(n);
    else if (n < this.A[0]) this.A.unshift(n);
    else {
        let [i_l, i_r] = [0, this.A.length - 1];
        while (i_l < i_r) {
            let i_m = i_l + Math.floor((i_r - i_l) / 2);
            if (this.A[i_m] < n) i_l = i_m + 1;
            else i_r = i_m;
        }
        this.A.splice(i_l, 0, n);
    }
    console.log(this.A)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.A.length === 0) return null;
    let m_l = this.A[Math.floor((this.A.length - 1) / 2)];
    let m_r = this.A[Math.ceil((this.A.length - 1) / 2)];
    return m_l + (m_r - m_l) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */