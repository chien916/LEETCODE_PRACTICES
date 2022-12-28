/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num) {
    let target = 1;
    if (num === 1) return 0;
    else if (num < target) return 1;//too low
    else return -1;//too high
}

var guessNumber = function (n) {
    let minVal_n = 1;
    let maxVal_n = n;
    for (; ;) {
        if (maxVal_n - minVal_n <= 1) {
            if (guess(maxVal_n) === 0) return maxVal_n;
            else if (guess(minVal_n) === 0) return minVal_n;
            else return -1;
        }
        let midVal_n = Math.ceil((minVal_n + maxVal_n) / 2);
        switch (guess(midVal_n)) {
            case 0:
                return midVal_n;
                break;
            case -1:
                maxVal_n = midVal_n;
                break;
            case 1:
                minVal_n = midVal_n;
                break;
        }
    }
}
