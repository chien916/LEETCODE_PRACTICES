/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.history_A = [homepage];
    this.currInd_n = NaN;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    //delete all forward history if available
    if (!isNaN(this.currInd_n)) {
        this.history_A.splice(this.currInd_n + 1, Infinity);
    }
    //adds the current site to history
    this.history_A.push(url);
    console.log(this.history_A + " " +  this.currInd_n );
    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    let shiftedInd_n
        = (isNaN(this.currInd_n) ? this.history_A.length : this.currInd_n)
        - steps;
    //I'm assuming there's always at least 1 site in history (homepage probably?)
    if (shiftedInd_n < 0) shiftedInd_n = 0;
    this.currInd_n = shiftedInd_n;
    console.log(this.history_A + " " +  this.currInd_n );
    return this.history_A[shiftedInd_n];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if (isNaN(this.currInd_n)) {
        //what happens when current is the latest page and no forward history?
        return this.history_A[this.history_A.length - 1];//returns the current? maybe?
    }
    let shiftedInd_n = this.currInd_n + steps;
    if (shiftedInd_n > this.history_A.length - 1) shiftedInd_n = this.history_A.length - 1;
    this.currInd_n = shiftedInd_n;
    console.log(this.history_A + " " +  this.currInd_n );
    return this.history_A[shiftedInd_n];
};


var obj = new BrowserHistory(homepage)
obj.visit(url)
var param_2 = obj.back(steps)
var param_3 = obj.forward(steps)
