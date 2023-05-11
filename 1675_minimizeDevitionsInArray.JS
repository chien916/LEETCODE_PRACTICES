/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
    /**
     * 观察:
     * 奇数可以变大一次(即*2)
     * 偶数可以变小数次(直到变成奇数)
     * 
     * 奇数变大后变成偶数,还可以重新变小到原数
     * 把所有奇数先变大, 然后所有元素只能自此变小
     * 
     * 把最大的刺头尝试缩小,越小越好,但别小过最小值
     */

    let min_n = Number.MAX_SAFE_INTEGER;
    let minDev_n = Number.MAX_SAFE_INTEGER;

    let heap_ = new MaxPriorityQueue();
    for (let it_n of nums) {
        //第一次遍历: 找出最小值, 将所有奇数变大, 把变大的奇数和所有偶数推进堆
        it_n <<= (it_n % 2);
        if (it_n < min_n) min_n = it_n;
        heap_.enqueue(it_n);
    }

    for (let curr_n = heap_.dequeue().element; !heap_.isEmpty(); curr_n = heap_.dequeue().element) {
        //每一次取出一个当前最大值,偶数则除以二, 直到变成奇数,奇数则停止,因为无法除以二了

        {//在这里比dev因为一旦除以二,curr可能就不再是当前状态的最大值了
            let currDev_n = curr_n - min_n;
            if (currDev_n < minDev_n) minDev_n = currDev_n;
        }
        
        if (curr_n % 2 !== 0) return minDev_n;

        curr_n >>= 1;
        if (curr_n < min_n) min_n = curr_n;
        heap_.enqueue(curr_n);
    }

};

const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

minimumDeviation([1,2,3,4,]);