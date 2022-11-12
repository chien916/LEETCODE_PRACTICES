/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 *
 * 知识点1：候选元素符合条件检查位置
 * - 不一定探索到头也可以符合条件 → 在回溯函数最上面检查
 * -- 如果符合条件以后可以继续探索 → 添加到候选元素结果数组后不返回
 *
 * 易错点2：坐标检查
 * 如果使用的是分别对x和y进行+1，-1，0，那么x和y坐标检查时不要忘了太小和太大都要检查
 * - 小于0或者大于length都不可以，不要忘了小于0
 *
 * 知识点3：回溯起始点
 * 如果起始点不一定非要是
 *
 */
var exist = function (board, word) {
	let backTrack_f = (currCand_sa, currX_n, currY_n, board_sa, word_s) => {
		if (currCand_sa.length === word_s.length && currCand_sa.join("") === word_s)//!1
			return true;
		if (currX_n < 0 || currX_n >= board_sa[0].length)//!2
			return false;
		if (currY_n < 0 || currY_n >= board_sa.length)
			return false;
		if (!board_sa[currY_n][currX_n] || board_sa[currY_n][currX_n] !== word.charAt(currCand_sa.length))
			return false;
		currCand_sa.push(board_sa[currY_n][currX_n]);
		board_sa[currY_n][currX_n] = null;
		let result_b = backTrack_f(currCand_sa, currX_n + 1, currY_n, board_sa, word_s)
			|| backTrack_f(currCand_sa, currX_n, currY_n + 1, board_sa, word_s)
			|| backTrack_f(currCand_sa, currX_n - 1, currY_n, board_sa, word_s)
			|| backTrack_f(currCand_sa, currX_n, currY_n - 1, board_sa, word_s);
		board_sa[currY_n][currX_n] = currCand_sa.pop();
		return result_b;
	}
	for (let y = 0; y < board.length; ++y)//!3
		for (let x = 0; board[0] && x < board[0].length; ++x)
			if (backTrack_f([], x, y, board, word))
				return true;
	return false;
	//return backTrack_f([], 0, 0, board, word);//
};
//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
// console.log(exist(
// 	[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
// 	"SEE"));
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");