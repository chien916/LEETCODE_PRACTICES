var SummaryRanges = function () {
    this.A = [];
    this.S = new Set();
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (v) {
    if (this.S.has(v)) return;
    this.S.add(v);
    if (this.A.length === 0 || this.A[this.A.length - 1] < v) { this.A.push(v); }
    else {
        let [l, h] = [0, this.A.length - 1];
        while (l < h) {
            let m = l + ((h - l) >>> 1);
            if (this.A[m] >= v) h = m;
            else l = m + 1;
        }
        this.A.splice(l, 0, v);
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    //console.log(`queried -> ${this.A}`)
    let A_r = [];
    for (let i = 0; i < this.A.length; ++i) {
        if (i === 0 || this.A[i - 1] !== this.A[i] - 1) A_r.push([this.A[i], this.A[i]]);
        A_r[A_r.length - 1][1] = this.A[i];
    }
    return A_r;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */