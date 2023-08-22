/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, i_, s) {
	let v_floor = Math.floor(s/n);
	let v_ceil = Math.ceil(s/n);
	let c_ceil = Math.floor(s/v_ceil);
	let c_floor = n - c_ceil;
	
};