/**
 * @return {string}
 */
var orderlyQueue = function (s_s, k_n) {
    /**
     * 思路：
     * 对于a[123456]来说，
     * 如果k等于1，那么唯一可以变换的方式是[123456]a
     * 如果k大于1，那么a可以插入到任何地方
     * [12345]a[6] -> 先将[123456]变换成[612345] ->插入a
     */
    let currSmallestStr_s = s_s;
    if (k_n === 1)
        //brute force attempts
        for (let i_n = 0; i_n < s_s.length; ++i_n){
            let currStr_s = s_s.substring(i_n,s_s.length) + s_s.substring(0,i_n);
            if (currStr_s.localeCompare(currSmallestStr_s)<0) currSmallestStr_s = currStr_s;
        }
    else currSmallestStr_s = [...currSmallestStr_s].sort().join("");
    return currSmallestStr_s;
};