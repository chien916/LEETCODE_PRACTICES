/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    //bucket sort -> mc += O(n)
    _bucket_a = Array(nums.length+1).fill().map(()=>[]);
    //value to occurances count map
    _val2ocr = new Map();
    for (let it_n of nums) {
        if (!_val2ocr.has(it_n)) _val2ocr.set(it_n, 0);
        _val2ocr.set(it_n,_val2ocr.get(it_n)+1);
    }
    //reduce map to bucket 
    for (let [key_n, val_n] of _val2ocr) {
        _bucket_a[val_n].push(key_n);
    }
    //count from bucket till k
    let _ret_a = [];
    for (let cPtr_n = _bucket_a.length - 1; _ret_a.length < k; --cPtr_n) {
        for (let it_n of _bucket_a[cPtr_n])
            _ret_a.push(it_n);
    }
    //formulate answer
    return _ret_a;

};

console.log(topKFrequent([1,1,1,2,2,3], 2));