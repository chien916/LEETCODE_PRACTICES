/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s_s) {
	/**
	 * 思路：
	 * 尝试每两个字母的组合，并且进行一次O（n）的扫描，找到此组合的最大变化子字符串差值
	 * 差值=第一个字母的数量-第二个字母的数量
	 * 
	 * 定义状态：
	 * dp[i][0] -> 截至到第i个索引，最大变换的子字符串的差值，并且此字符串不包含第二个字母
	 * dp[i][1] -> 截至到第i个索引，最大变换的子字符串的差值，并且此字符串包含第二个字母
	 * 
	 * 状态转移：
	 * dp[i][0] 
	 * = max(dp[i-1][0],0)+1 如果s[i]是第一个字母，则差值将会加一
	 * 		可以从dp[i-1][0]减一
	 *		也可以从0加一，自立门户重新建立substring
	 * | -inf 如果s[i]是第二个字母，则此域不可用
	 * | max(dp[i-1][0],0) 如果都不是，则差值不会有变化
	 * 		同1，可以连接之前的，也可以自立门户
	 * 
	 * 
	 * dp[i][1]
	 * = dp[i-1][1]+1 如果s[i]是第一个字母，则差值将会加一
	 * | max(（dp[i-1][0],dp[i-1][1]，0）-1) 如果s[i]是第二个字母，则差值将会是减一
	 * 		可以从dp[i-1][0]减一，也就是这是第二个字母的第一次出现
	 * 		也可以从dp[i-1][1]减一，也就是这不是第二个字母的第一次出现
	 * 		也可以直接是-1，可以自立门户（这是唯一一种可以自立门户的情况
	 * 			因为第一种情况和第三种情况无法保证第二个字母出现过
	 * 		分两种情况是因为有可能出现过第二个字母，然后出现很多第一个字母，又出现第二个字母
	 * | dp[i-1][1] 如果都不是，则差值不会有变化
	 * 
	 * 基态：
	 * dp[0][0] 
	 * = 1 如果s[0]是第一个字母，因为目前仅包含第二个字母，不包含第一个字母
	 * | -inf 如果s[0]是第二个字母
	 * | 0 如果都不是
	 * dp[0][1]
	 * = -inf 如果s[0]是第一个字母，因为目前不包含第二个字母
	 * | -1 如果s[0]是第二个字母，因为当前字母仅包含第二个字母
	 * | -inf 如果都不是，因为目前不包含第二个字母，原因同1
	 */
	const leng_n = s_s.length;
	const getCurrVari_nf = (pos_n, char1_n, char2_n) => {
		let currChar_n = s_s.charCodeAt(pos_n);
		if (currChar_n === char1_n) return 1;
		else if (currChar_n === char2_n) return -1;
		else return 0;
	}
	let letters_S = new Set();
	for (let i_n = 0; i_n < leng_n; ++i_n)
		letters_S.add(s_s.charCodeAt(i_n));
	if (letters_S.size === 1) return 0;
	let maxVariance_n = Number.NEGATIVE_INFINITY;
	for (let i_n of letters_S) {
		for (let j_n of letters_S) {
			if (i_n === j_n) continue;//cannot be the same letter
			let dp_nAA = Array(leng_n).fill().map(() => Array(2).fill(Number.NEGATIVE_INFINITY));
			for (let k_n = 0; k_n < leng_n; ++k_n) {
				let currVari_n = getCurrVari_nf(k_n, i_n, j_n);
				if (k_n === 0) {
					dp_nAA[0] = [
						((currVari_n === 1) && (1))
						+ ((currVari_n === -1) && (Number.NEGATIVE_INFINITY))
						+ ((currVari_n === 0) && (0))
						,
						((currVari_n === 1) && (Number.NEGATIVE_INFINITY))
						+ ((currVari_n === -1) && (-1))
						+ ((currVari_n === 0) && (Number.NEGATIVE_INFINITY))];
					continue;
				}
				dp_nAA[k_n] = [
					((currVari_n === 1) && (Math.max(dp_nAA[k_n - 1][0], 0) + 1))
					+ ((currVari_n === -1) && (Number.NEGATIVE_INFINITY))
					+ ((currVari_n === 0) && (Math.max(dp_nAA[k_n - 1][0], 0)))
					,
					((currVari_n === 1) && (dp_nAA[k_n - 1][1] + 1))
					+ ((currVari_n === -1) && (Math.max(dp_nAA[k_n - 1][0], dp_nAA[k_n - 1][1],0) - 1))
					+ ((currVari_n === 0) && (dp_nAA[k_n - 1][1]))];
			}
			maxVariance_n = Math.max(maxVariance_n, Math.max(...dp_nAA.map(it_nA => it_nA[1])));
		}
	}
	return maxVariance_n;
};


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var largestVariance = function (s) {
// 	//关键词：substring,variance
// 	//substring: 利用dp代表当前最佳substring状态
// 	const CHARCODE_a_N = "a".charCodeAt(0);
// 	const CHARCODE_z_N = "z".charCodeAt(0);
// 	let currLargestVariance_n = 0;

// 	for (let currI_n = CHARCODE_a_N; currI_n <= CHARCODE_z_N; ++currI_n) {
// 		for (let currJ_n = currI_n + 1; currJ_n <= CHARCODE_z_N; ++currJ_n) {
// 			// let dpIminusJ_nA = new Array(s.length).fill(0);
// 			// let dpJminusI_nA = new Array(s.length).fill(0);

// 			//dp每个元素代表截至当前最大substring的variance最大值为多少
// 			// let occurancesI_n = 0;
// 			// let occurancesJ_n = 0;
// 			// let currMaxIMinusJ_n = 0;
// 			// let currMaxJMinusI_n = 0;

// 			//curr letter i count, curr letter j count, max diff so far
// 			let currIMinusJ_nA = [0, 0, 0];//i occurs more frequent than j
// 			let currJMinusI_nA = [0, 0, 0];//j occurs more frequent than i

// 			for (let currStrInd_n = 0; currStrInd_n < s.length; ++currStrInd_n) {
// 				let currCharCode_n = s.charCodeAt(currStrInd_n);
// 				if (currCharCode_n === currI_n) {
// 					currIMinusJ_nA[0] += 1;
// 					if (currIMinusJ_nA[0] > 0 && currIMinusJ_nA[1] > 0
// 						&& currIMinusJ_nA[1] - currIMinusJ_nA[0] > currIMinusJ_nA[2]) {
// 							currIMinusJ_nA[2] = 0
// 					}
// 				}
// 				if (currCharCode_n === currJ_n) occurancesJ_n += 1;

// 				// let prevIminusJ_n = (currStrInd_n === 0 ? 0 : dpIminusJ_nA[currStrInd_n - 1]);
// 				// let prevJminusI_n = (currStrInd_n === 0 ? 0 : dpJminusI_nA[currStrInd_n - 1]);
// 				// let bothOccured_b = occurancesI_n > 0 && occurancesJ_n > 0;
// 				// let currIminusJ_n = occurancesI_n - occurancesJ_n;
// 				// if (currIminusJ_n < 0) currIminusJ_n = 0;
// 				// let currJminusI_n = occurancesJ_n - occurancesI_n;
// 				// if (currJminusI_n < 0) currJminusI_n = 0;
// 				// if (bothOccured_b && currIminusJ_n > prevIminusJ_n)
// 				// 	dpIminusJ_nA[currStrInd_n] = currIminusJ_n;
// 				// else
// 				// 	dpIminusJ_nA[currStrInd_n] = prevIminusJ_n;
// 				// if (bothOccured_b && currJminusI_n > prevJminusI_n)
// 				// 	dpJminusI_nA[currStrInd_n] = currJminusI_n;
// 				// else
// 				// 	dpJminusI_nA[currStrInd_n] = prevJminusI_n;
// 			}
// 			// let dpIminusJMax_n = Math.max(...dpIminusJ_nA);
// 			// let dpJminusIMax_n = Math.max(...dpJminusI_nA);
// 			// currLargestVariance_n = Math.max(currLargestVariance_n, dpIminusJMax_n, dpJminusIMax_n);
// 		}
// 	}
// 	return currLargestVariance_n;
// };

//let ans = largestVariance("aababbb");
//let err = largestVariance("aabb");
//let err2 = largestVariance("a");
let err3 = largestVariance("aabbbb");
console.log(err3);