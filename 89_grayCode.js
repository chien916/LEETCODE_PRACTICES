/**
 * @param {number} n
 * @return {number[]}
 *
 * 知识点:G(n)=n^(n>>1)
 */
var grayCode = function (n) {
	let toReturn_na = [];
	for (let i = 0; i < Math.pow(2,n); i++) {
		toReturn_na.push(i ^ (i >> 1));
	}
	return toReturn_na;
};