/**
 * @param {number} x
 * @return {number}
 *
 * 知识点：牛顿法求平方根
 * x' = (x+n/x)/2
 * ERR = (x-r*r)
 *
 */
var mySqrt = function (x) {
	let [x_n, n_n] = [x, x];
	while (Math.abs(x_n*x_n - n_n)>=1e-3) {
		x_n = (x_n + n_n / x_n) / 2;
	}
	return Math.floor(x_n);
};

mySqrt(8)