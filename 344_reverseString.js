/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let [leftInd_n, rightInd_n] = [0, s.length - 1];
	while (leftInd_n < rightInd_n) {
		[s[rightInd_n], s[leftInd_n]] = [s[leftInd_n], s[rightInd_n]];
		--rightInd_n;
		++leftInd_n;
	}
};

reverseString(
	["h", "e", "l", "l", "o"]);