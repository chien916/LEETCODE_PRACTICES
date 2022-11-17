/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	if (s.length <= 1) return s;
	const allVowels_ss = new Set(
		["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
	let string_sa = [...s];//string to string(char) array
	let [leftInd_n, rightInd_n] = [0, string_sa.length - 1];
	while (leftInd_n <= rightInd_n) {
		if (!allVowels_ss.has(string_sa[leftInd_n])) {
			++leftInd_n;
			continue;
		}
		if (!allVowels_ss.has(string_sa[rightInd_n])) {
			--leftInd_n;
			continue;
		}
		[string_sa[leftInd_n], string_sa[rightInd_n]] = [string_sa[rightInd_n], string_sa[leftInd_n]];
	}
};