/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	if (a === "0") return b;
	if (b === "0") return a;
	let toReturn_s = "";
	let carryInBool_b = false;
	let [currLeftInd_n, currRightInd_n] = [a.length - 1, b.length - 1];
	while (currLeftInd_n >= 0 || currRightInd_n >= 0 || carryInBool_b) {
		let currLeftBool_b = (currLeftInd_n >= 0) ? a.charAt(currLeftInd_n) === "1" : false;
		let currRightBool_b = (currRightInd_n >= 0) ? b.charAt(currRightInd_n) === "1" : false;
		let currSumBool_b = (carryInBool_b ^ (currLeftBool_b ^ currRightBool_b)) === 1;
		carryInBool_b = (currLeftBool_b & currRightBool_b
			| currRightBool_b & carryInBool_b
			| currLeftBool_b & carryInBool_b) === 1;
		toReturn_s = (currSumBool_b ? "1" : "0") + toReturn_s;
		--currLeftInd_n;
		--currRightInd_n;

	}
	return toReturn_s;
};

addBinary("11", "1");