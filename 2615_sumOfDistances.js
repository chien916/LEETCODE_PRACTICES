/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    //conclusion transition

    
    let _val2ind = new Map();
    nums.forEach((it_n, ind_n) => {
        if (!_val2ind.has(it_n)) _val2ind.set(it_n, []);
        _val2ind.get(it_n).push(ind_n);
    });

    let _ret_a = Array(nums.length).fill(0);
    [..._val2ind.values()].forEach((it_a) => {//for each value in map
        it_a.forEach((jt_n, jnd_n) => {//for each indice mapping to the certain value
            if (jnd_n === 0)
                _ret_a[jt_n] = it_a.reduce((p_n, kt_n) => p_n + kt_n - jt_n, 0);//first init
            else {
                let prevJt_n = it_a[jnd_n - 1];
                _ret_a[jt_n] = _ret_a[prevJt_n] + (jt_n - prevJt_n) * (jnd_n * 2 - it_a.length);//transition
            }
        });
    });

    return _ret_a;
}

console.log(distance([1,3,1,1,2]));