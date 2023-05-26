/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    let cache_A = new Map();
    cache_A.set(0, false);
    cache_A.set(1, true);
    let dfs_f = (n) => {
        if (!cache_A.has(n)) {
            cache_A.set(n,
                (n % 2 === 0 && isUgly(n / 2))
                || (n % 3 === 0 && isUgly(n / 3))
                || (n % 5 === 0 && isUgly(n / 5)));
        }
        return cache_A.get(n);
    }
    return dfs_f(n);
};

