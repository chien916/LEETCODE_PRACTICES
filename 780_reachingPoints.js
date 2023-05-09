/**
 * @param {number} sx_n
 * @param {number} sy_n
 * @param {number} tx_n
 * @param {number} ty_n
 * @return {boolean}
 */
var reachingPoints = function (sx_n, sy_n, tx_n, ty_n) {
    /**
     * 思路：从结果往前推，直到符合初始条件时停止
     * 
     * 因为[x',y'] = [x,x+y] | [x+y,y]，所以新的x和y比较大的一个
     * 一定是刚刚加上的
     * 
     * 假设最终可以到达[x',y']，那么一定可以到达[x',y'-x']或者[x'-y',y']
     * 并且一定有一次[x',y'-x']或者[x'-y',y']是[sx,sy]，也就是初始值
     * 
     * 如果达不到初始值，则代表无法到达[tx,ty]
     * 
     * 错误1：
     * 如果此时x'和y'相等，那么分别尝试[x',y'-x']和[x'-y',y']
     * 
     * 错误2：
     * 先判断错误条件，因为如果一开始给定的sx比tx小或者sy比ty小，
     * 那么在第二条件和第三条件时mod以后仍然可能为0，即使前面是负数
     * 
     * 错误3：
     * 不确定为什么，但是如果单纯判断x和y坐标绝对相等，那么有一种情况
     * 就是
     * 
     * 错误4：
     * a = a - b直到a < b，可以用mod来代替
     * a = a % b，但要注意边界条件--
     * 如果a可以被b整除，那么最后结果将是0，需要在加上一份b
     * 
     */
    //recursion exit trigger
    while (true) {
        if (sx_n > tx_n || sy_n > ty_n) return false;//!2
        if (sx_n === tx_n && (ty_n - sy_n) % sx_n === 0) return true;//!3
        if (sy_n === ty_n && (tx_n - sx_n) % sy_n === 0) return true;//!3
        if (tx_n < ty_n) {
            ty_n = ty_n % tx_n;
            if (ty_n === 0) ty_n = tx_n;//!4
        } else if (tx_n > ty_n) {
            tx_n = tx_n % ty_n;
            if (tx_n === 0) tx_n = ty_n;//!4
        } else {
            return reachingPoints(sx_n, sy_n, tx_n - ty_n, ty_n)
                || reachingPoints(sx_n, sy_n, tx_n, ty_n - tx_n);//!1
        }
    }
};

console.log(reachingPoints(3, 7, 3, 4));