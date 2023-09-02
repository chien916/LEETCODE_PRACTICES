/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let getNext = (n) => {
        let n_ = 0;
        while (n) {
            n_ += (n % 10) ** 2s;
            n = (n - (n % 10)) / 10;
        }
        return n_;
    }
    let [n_slow, n_fast] = [n, getNext(n)];
    while (1) {
        if (n_slow === 1 || n_fast === 1) return true;
        if (n_slow === n_fast) return false;
        n_slow = getNext(n_slow);
        n_fast = getNext(getNext(n_fast));
    }

};