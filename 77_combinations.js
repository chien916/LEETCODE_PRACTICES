/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 *
 * 知识点1：
 * 如果每次回溯产生多个树枝，那么循环中的索引一定会被传到下一个层
 *
 *
 */
var combine = function (n, k) {
	let backtrack_f = (currCand_a, lRan_n, hRan_n, candLeng_n, allCand_aa) => {
		if (currCand_a.length === candLeng_n) {
			allCand_aa.push([...currCand_a]);
			return;
		}
		for(let i=lRan_n;i<=hRan_n;++i){
			currCand_a.push(i);
			backtrack_f(currCand_a,i+1,hRan_n,candLeng_n,allCand_aa);//!1
			currCand_a.pop();
		}
	}
	let allCand_aa = [];
	backtrack_f([],1,n,k,allCand_aa);
	return allCand_aa;
};

