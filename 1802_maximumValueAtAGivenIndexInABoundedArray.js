/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, i_, s) {
	//sum of consec. seq. 1-index based
	let dp = (v) => {
		return v * (v + 1n) / 2n;
	}
	let get_sum = (l, v) => {
		if (v < l) {
			return dp(v) + (l - v);
		} else {
			// 3 4 5 6
			return dp(v) - dp(v - l);
		}
	}
	//binary search
	let [v_low, v_high] = [0n, BigInt(s)];
	while (v_high - v_low > 0n) {
		let v_mid = v_high - ((v_high - v_low) / 2n);
		/**
		 * 1 2 3 4 5 6 5 4        value
		 *     |     |   |
		 *     0 1 2 3 4 5 n=6    index
		 */
		//let s_left = Dp[v_mid] - Dp[v_mid - (i_ + 1)];
		//let s_right = Dp[v_mid] - Dp[v_mid - (n - (i_ + 1)) - 1];
		let s_left = get_sum(BigInt(i_), v_mid - 1n);//not including middle element
		let s_right = get_sum(BigInt(n - i_), v_mid)//including middle element
		// 2 3 2 1 1 1
		//console.log(`when v = ${v_mid} s_left = ${s_left} s_right = ${s_right} s = ${s_left + s_right}`)
		if (s_left + s_right <= BigInt(s)) v_low = v_mid;
		else v_high = v_mid - 1n;
	}
	return Number(v_low);
};

//console.log(maxValue(6, 1, 10))