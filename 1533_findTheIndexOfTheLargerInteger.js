/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function (reader) {
    let [lo, hi] = [0, reader.length() - 1]
    while (lo < hi) {
        //[- - -] [- -] 
        let mid = lo + ((hi - lo) >>> 1)//left
        let mid_ = lo + ((hi - lo + 1) >>> 1)//right
        let leftBigger = reader.compareSub(lo, Math.min(mid, mid_), Math.max(mid, mid_), hi)
        if (leftBigger === 0) { return mid }
        else if (leftBigger > 0) { hi = mid }
        else if (leftBigger < 0) { lo = mid_ }
    }
    return lo
};