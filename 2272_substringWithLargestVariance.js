/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
	//关键词：substring,variance
	//substring: 利用dp代表当前最佳substring状态
	const CHARCODE_a_N = "a".charCodeAt(0);
	const CHARCODE_z_N = "z".charCodeAt(0);
	let currLargestVariance_n = 0;

	for (let currI_n = CHARCODE_a_N; currI_n <= CHARCODE_z_N; ++currI_n) {
		for (let currJ_n = currI_n + 1; currJ_n <= CHARCODE_z_N; ++currJ_n) {
			// let dpIminusJ_nA = new Array(s.length).fill(0);
			// let dpJminusI_nA = new Array(s.length).fill(0);

			//dp每个元素代表截至当前最大substring的variance最大值为多少
			// let occurancesI_n = 0;
			// let occurancesJ_n = 0;
			// let currMaxIMinusJ_n = 0;
			// let currMaxJMinusI_n = 0;

			//curr letter i count, curr letter j count, max diff so far
			let currIMinusJ_nA = [0, 0, 0];//i occurs more frequent than j
			let currJMinusI_nA = [0, 0, 0];//j occurs more frequent than i

			for (let currStrInd_n = 0; currStrInd_n < s.length; ++currStrInd_n) {
				let currCharCode_n = s.charCodeAt(currStrInd_n);
				if (currCharCode_n === currI_n) {
					currIMinusJ_nA[0] += 1;
					if (currIMinusJ_nA[0] > 0 && currIMinusJ_nA[1] > 0
						&& currIMinusJ_nA[1] - currIMinusJ_nA[0] > currIMinusJ_nA[2]) {
							currIMinusJ_nA[2] = 0
					}
				}
				if (currCharCode_n === currJ_n) occurancesJ_n += 1;

				// let prevIminusJ_n = (currStrInd_n === 0 ? 0 : dpIminusJ_nA[currStrInd_n - 1]);
				// let prevJminusI_n = (currStrInd_n === 0 ? 0 : dpJminusI_nA[currStrInd_n - 1]);
				// let bothOccured_b = occurancesI_n > 0 && occurancesJ_n > 0;
				// let currIminusJ_n = occurancesI_n - occurancesJ_n;
				// if (currIminusJ_n < 0) currIminusJ_n = 0;
				// let currJminusI_n = occurancesJ_n - occurancesI_n;
				// if (currJminusI_n < 0) currJminusI_n = 0;
				// if (bothOccured_b && currIminusJ_n > prevIminusJ_n)
				// 	dpIminusJ_nA[currStrInd_n] = currIminusJ_n;
				// else
				// 	dpIminusJ_nA[currStrInd_n] = prevIminusJ_n;
				// if (bothOccured_b && currJminusI_n > prevJminusI_n)
				// 	dpJminusI_nA[currStrInd_n] = currJminusI_n;
				// else
				// 	dpJminusI_nA[currStrInd_n] = prevJminusI_n;
			}
			// let dpIminusJMax_n = Math.max(...dpIminusJ_nA);
			// let dpJminusIMax_n = Math.max(...dpJminusI_nA);
			// currLargestVariance_n = Math.max(currLargestVariance_n, dpIminusJMax_n, dpJminusIMax_n);
		}
	}
	return currLargestVariance_n;
};

largestVariance("aababbb");