/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	let backTrack_f = (currCand_a, currInd_n, poteCand_s, passCand_sa) => {
		if (currCand_a.length > 4)
			return;//candidate array too big
		if (currCand_a.length > 0) {
			let currCandElem_s = currCand_a[currCand_a.length - 1];
			if (parseInt(currCandElem_s) > 255)
				return;//current number too big
			if (currCandElem_s.length > 1 && currCandElem_s.charAt(0) === "0")
				return;//current number starts with 0
		}
		if (currInd_n >= s.length && currCand_a.length === 4) {
			passCand_sa.push(currCand_a.join("."));//found candidate
			return;
		}
		[1, 2, 3].forEach(i => {
			if (currInd_n + i > poteCand_s.length) return;
			currCand_a.push(poteCand_s.slice(currInd_n, currInd_n + i));
			backTrack_f(currCand_a, currInd_n + i, poteCand_s, passCand_sa);
			currCand_a.pop();
		})
	}
	let passCand_sa = [];
	backTrack_f([], 0, s, passCand_sa);
	return passCand_sa;
};
console.log(restoreIpAddresses("101023"));
// console.log(restoreIpAddresses("25525511135"));