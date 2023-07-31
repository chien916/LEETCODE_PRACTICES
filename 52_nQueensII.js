/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    return solveNQueens(n).length;
};

/**
 * @param {number} n
 * @return {string[][]}
 * 0b0000 Queen Left Vertical Right
 *
 */
var solveNQueens = function (n) {
	let _return_a = [];
	let currMat_s = [];
	currMat_s[0] = Array(n).fill(0b0000);
	const backtrack_f = (currRowCount_n) => {
		if (currRowCount_n >= n) {//found candidate!
			let _push_a = [];
			for (let i = 0; i < n; ++i) {
				let _push_s = "";
				for (let j = 0; j < n; ++j) {
					_push_s += (currMat_s[i][j] & 0b1000) > 0 ? "Q" : ".";
				}
				_push_a.push(_push_s);
			}
			_return_a.push(_push_a);
			return;
		}
		for (let i = 0; i < n; ++i) {
			if (currMat_s[currRowCount_n][i] === 0b0000) {//queen can be placed here
				currMat_s[currRowCount_n][i] = 0b1000;//temporary!
				let nextLine_a = Array(n).fill(0b0000);
				for (let j = 0; j < n; ++j) {//form next line string
					const it = currMat_s[currRowCount_n][j];
					if ((it & 0b1100) > 0 && j - 1 >= 0)
						nextLine_a[j - 1] |= 0b0100;
					if ((it & 0b1010) > 0)
						nextLine_a[j] |= 0b0010;
					if ((it & 0b1001) > 0 && j + 1 < n)
						nextLine_a[j + 1] |= 0b0001;
				}
				currMat_s.push(nextLine_a);//temporary!
				backtrack_f(currRowCount_n + 1);//next search
				currMat_s.pop();//revert
				currMat_s[currRowCount_n][i] = 0b0000;//revert
			}
		}
	}
	backtrack_f(0);
	return _return_a;
};