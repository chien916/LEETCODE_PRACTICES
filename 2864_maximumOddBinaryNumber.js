/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
	let count = 0;
	for (let i = 0; i < s.length; ++i) {
		if (s.charAt(i) === '1') ++count;
	}
	return Array(count - 1).fill('1').join("")
		+ Array(s.length - count).fill('0').join("")
		+ '1';
};