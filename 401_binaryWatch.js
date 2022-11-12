/**
 * 知识点：
 * 1.一定要等走到头了再添加，而不要一符合条件就添加
 *   - 走到头时分为有条件添加和无条件添加，此题是有条件添加
 *   - 双层嵌套回溯时一定要到头并且符合条件以后再呼叫下一层回溯
 * 2.在第一步呼叫回溯函数的时候，不需要考虑两种情况，因为：
 *   - 在此次呼叫的时候会考虑是否包含此刻索引代表的元素，而不是下一刻索引代表的元素
 *   - 无论是否包含，索引总会增加一，而积累的值不一定会增加
 *
 * 易错点：
 * 1.把Ind放到变量的前面以防和变量本身混淆
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
	if (turnedOn === 0) return ["0:00"];//boundary
	const HRS_NA = [1, 2, 4, 8];
	const MINS_NA = [1, 2, 4, 8, 16, 32];
	let _return_sA = [];
	let backtrackHrs_f = (currHrsInd_n, currHrs_n, currCount_n) => {
		if (currHrsInd_n >= HRS_NA.length) {
			if (currHrs_n < 12) {
				// console.log(currHrs_n);
				backtrackMins_f(currHrs_n, 0, 0, currCount_n);
			}
			return;//index boundary
		}
		backtrackHrs_f(currHrsInd_n + 1, currHrs_n, currCount_n);
		backtrackHrs_f(currHrsInd_n + 1, currHrs_n + HRS_NA[currHrsInd_n], currCount_n + 1);
		// backtrackMins_f(currHrs_n, 0, 0, currCount_n);
	}
	let backtrackMins_f = (currHrs_n, currMinsInd_n, currMins_n, currCount_n) => {
		// console.log(currMins_n);
		if (currMinsInd_n >= MINS_NA.length) {
			if (currCount_n === turnedOn && currMins_n < 60) {//backtrack end case
				let hrs_s = currHrs_n.toString();
				let mins_s = currMins_n.toString();
				if (mins_s.length === 1) {
					mins_s = "0" + mins_s;
				}
				_return_sA.push(hrs_s + ":" + mins_s);
			}
			return;
		}
		backtrackMins_f(currHrs_n, currMinsInd_n + 1, currMins_n + MINS_NA[currMinsInd_n], currCount_n + 1);
		backtrackMins_f(currHrs_n, currMinsInd_n + 1, currMins_n, currCount_n);
	}
	backtrackHrs_f(0, 0, 0);
	return _return_sA;
	// return _return_sA.sort((first, second) => {
	// 	let _first = first.split(":");
	// 	let _second = second.split(":");
	// 	let [_f1, _f2, _s1, _s2] = [parseInt(_first[0]), parseInt(_first[1]), parseInt(_second[0]), parseInt(_second[1])]
	// 	if (_f1 === _s1) {
	// 		return _f2 - _s2 < 0 ? -1 : 1;
	// 	} else {
	// 		return _f1 - _s1 < 0 ? -1 : 1;
	// 	}
	// });
};

