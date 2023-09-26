/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (H) {
	let l_h = H.length;
	let sum_max = 0;
	for (let i = 0; i < l_h; ++i) {
		let sum = H[i];
		for (let [j, max] = [i - 1, H[i]]; j > -1; --j) {
			sum += (max = Math.min(max, H[j]));
		}
		for (let [j, max] = [i + 1, H[i]]; j < l_h; ++j) {
			sum += (max = Math.min(max, H[j]));
		}
		sum_max = Math.max(sum_max, sum);
	}
	return sum_max;

};

/**
 * 
 */