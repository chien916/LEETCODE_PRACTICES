/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n_n) {
	/**
	 * 定义状态：
	 * dp[i][0] -> 放置i列 上下无突出 有几种可能
	 * dp[i][1] -> 放置i列 上有突出 有几种可能
	 * dp[i][2] -> 放置i列 下有突出 有几种可能
	 * 
	 * 状态转移：
	 * dp[i][0]
	 * = dp[i-1][0] -> 竖着放一个domino
	 * + dp[i-2][0] -> 横着放两个domino
	 * + dp[i-1][1] -> 放tromino把之前的下面塞上
	 * + dp[i-1][2] -> 放tromino把之前的上面塞上
	 * 
	 * dp[i][1]
	 * = dp[i-2][0] -> 放tromino并留一个上突出
	 * + dp[i-1][2] -> 放domino在上面，把之前的上面塞上
	 * 
	 * dp[i][2]
	 * = dp[i-2][0] -> 放tromino并留一个下突出
	 * + dp[i-1][1] -> 放domino在下面，把之前的下面塞上
	 */
	let m_n = Math.pow(10, 9) + 7;
	let dp_nAA = [];
	dp_nAA[0] = [1, 0, 0]; // domino vertical
	dp_nAA[1] = [2, 1, 1];
	for (let i_n = 2; i_n < n_n; ++i_n) {
		dp_nAA[i_n] = [
			(dp_nAA[i_n - 1][0] + dp_nAA[i_n - 2][0] + dp_nAA[i_n - 1][1] + dp_nAA[i_n - 1][2]) % m_n
			, (dp_nAA[i_n - 2][0] + dp_nAA[i_n - 1][2]) % m_n
			, (dp_nAA[i_n - 2][0] + dp_nAA[i_n - 1][1]) % m_n
		];
	}
	return dp_nAA[n_n - 1][0];
};

//testing 1
console.log(numTilings(3));



// /**
//  * @param {number} n
//  * @return {number}
//  * 思路：
//  * 1.一次看2*2个格子
//  * 2.看完这个2*2就看下一个，但是新看的左边俩是刚刚看的右边俩
//  * 3.记录下到目前为止有多少可能性
//  * 4.利用回溯法，把当前状态传递到下一个状态
//  *
//  */
// var numTilings = function (n) {
//     const DEBUG_b = false;
//     if (n === 1) return 1;//boundary case
//     let totalWaysCount_n = 0;
//     const PLACEMENTS_nA =
//         [0b1010//place one domino vertically
//             , 0b1100, 0b0011//place one domino horizontally
//             , 0b1111//place two dominos horizontally
//             , 0b1110, 0b1101, 0b0111, 0b1011//place one tromino 
//             , 0b0000//place nothing

//         ];
//     let memoryMap_M = new Map();
//     let nextState_f
//         = (currGrid_n, currN_n) => {
//             if (currN_n === n - 1) {
//                 totalWaysCount_n
//                     += !!((currGrid_n & 0b1000) && (currGrid_n & 0b0010)
//                         || !(currGrid_n & 0b1000) && !(currGrid_n & 0b0010));
//                 if (DEBUG_b)
//                     if (((currGrid_n & 0b1000) && (currGrid_n & 0b0010)
//                         || !(currGrid_n & 0b1000) && !(currGrid_n & 0b0010)))
//                         console.log(Array(currN_n).fill("-").join("")
//                             + "FOUND");
//                 return;
//             }
//             for (let placement_n of PLACEMENTS_nA) {
//                 // console.log(Array(currN_n).fill("-").join("")
//                 //     + "Trying " + placement_n.toString(2));
//                 if ((placement_n & currGrid_n) !== 0b0000) continue;
//                 let placedGrid_n = placement_n | currGrid_n;
//                 if (!(placedGrid_n & 0b1000 && placedGrid_n & 0b0010)) continue;
//                 if (DEBUG_b)
//                     console.log(Array(currN_n).fill("-").join("")
//                         + "Placed " + placement_n.toString(2));

//                 nextState_f(
//                     (placedGrid_n & 0b0101) << 1, currN_n + 1
//                 );
//             }
//         };
//     nextState_f(0b0000, 0, 0);
//     return totalWaysCount_n;
// };

