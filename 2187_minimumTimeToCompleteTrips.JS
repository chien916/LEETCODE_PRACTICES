/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
    /**
     * 思路:以值为基本的二分查找法
     * 最大值: totalTrips次,因为time[n]大于等于1
     * 最小值: 1次
     * 
     * 错误1: 如果数字过大,那>>1有可能出现负数
     */
    let min_n = Number.MAX_SAFE_INTEGER;
    let max_n = Number.MIN_SAFE_INTEGER;
    for(let it_n of time){
        if(it_n<min_n) min_n = it_n;
        if(it_n>max_n) max_n = it_n;
    }
    max_n = max_n * totalTrips;

    let test_f = (val_n) => {
        let sum_n = 0;
        let _ret_b = false;
        for (let it_n of time){
            sum_n += Math.floor(val_n / it_n);
            if(sum_n>=totalTrips){
                _ret_b = true;
                break;
            }
        }
        //console.log("TRIED "+val_n+" RETED "+_ret_b);
        return _ret_b;
    }
    for (; ;) {
        if (max_n - min_n <= 1)
            return test_f(min_n) ? min_n : (test_f(max_n) ? max_n : -1);
        let mid_n = Math.floor((max_n + min_n) /2);//!1
        if (test_f(mid_n))
            max_n = mid_n;
        else
            min_n = mid_n;
    }
};
