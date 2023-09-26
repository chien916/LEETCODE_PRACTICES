/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (H) {
	let l_h = H.length;
	let L = Array(l_h).fill();
	L[0] = H[0];
	let S = [[L[0], 1]];
	for (let i = 1; i < l_h; ++i) {
		let curr = L[i - 1] + H[i];
		let j = 0;
		for (; S.length && S[S.length - 1][0] > H[i];) {
			let _S = S.pop();
			curr = curr - (_S[0] - H[i]) * _S[1];
			j += _S[1];
			//S.push(H[i]);
		}
		S.push([H[i], j + 1]);
		L[i] = curr;
		//console.log(S)
	}
	let R = Array(l_h).fill();
	R[l_h - 1] = H[l_h - 1];
	S = [[R[l_h - 1], 1]];
	for (let i = l_h - 2; i > -1; --i) {
		let curr = R[i + 1] + H[i];
		let j = 0;
		for (; S.length && S[S.length - 1][0] > H[i];) {
			let _S = S.pop();
			curr = curr - (_S[0] - H[i]) * _S[1];
			j += _S[1];
		}
		S.push([H[i], j + 1]);
		R[i] = curr;
		//console.log(S)
		//console.log(S)

	}
	let s_max = 0;
	for (let i = -1; i < l_h; ++i) {
		let s = 0;
		if (i > -1) { s += L[i]; }
		if (i + 1 < l_h) { s += R[i + 1]; }
		if (s > s_max) s_max = s;
	}
	//console.log(R)
	return s_max;
};

