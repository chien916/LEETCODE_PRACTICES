/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
	let M = new Map();
	for (let i = 0; i < s.length; ++i) {
		let c = s.charAt(i);
		if (M.has(c) === false) {
			M.set(c, 0);
		}
		M.set(c, M.get(c) + 1);
	}
	let S = new Set();
	let C = [...M.values()].sort((a, b) => a - b);
	let c_del = 0;
	for (let i = C.length - 1; i > -1; --i) {
		let c = C[i];
		while (c > 0 && S.has(c)) {
			--c;
			++c_del;
		}
		S.add(c);
	}
	return c_del;
};