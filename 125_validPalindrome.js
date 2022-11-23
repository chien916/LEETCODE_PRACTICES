/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let [leftInd_n, rightInd_n] = [0, s.length - 1];
	let helperString_s = "az09"
	let [charCodeOf$a_n, charCodeOf$z_n, charCodeOf$0_n, charCodeOf$9_n]
		= [helperString_s.charCodeAt(0), helperString_s.charCodeAt(1), helperString_s.charCodeAt(2), helperString_s.charCodeAt(3)];
	while (leftInd_n < s.length && rightInd_n >= 0 && leftInd_n <= rightInd_n) {
		let [charCodeOfCurrLeftChar_n, charCodeOfCurrRightChar_n]
			= [s.charAt(leftInd_n).toLowerCase().charCodeAt(0), s.charAt(rightInd_n).toLowerCase().charCodeAt(0)];
		if (
			!(charCodeOfCurrLeftChar_n >= charCodeOf$a_n && charCodeOfCurrLeftChar_n <= charCodeOf$z_n
				|| charCodeOfCurrLeftChar_n >= charCodeOf$0_n && charCodeOfCurrLeftChar_n <= charCodeOf$9_n)) {
			++leftInd_n;
			continue;
		}
		if (
			!(charCodeOfCurrRightChar_n >= charCodeOf$a_n && charCodeOfCurrRightChar_n <= charCodeOf$z_n
				|| charCodeOfCurrRightChar_n >= charCodeOf$0_n && charCodeOfCurrRightChar_n <= charCodeOf$9_n)) {
			--rightInd_n;
			continue;
		}
		if (charCodeOfCurrLeftChar_n !== charCodeOfCurrRightChar_n)
			return false;
		++leftInd_n;
		--rightInd_n;
	}
	return true;
};