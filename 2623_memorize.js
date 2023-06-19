/**
 * @param {Function} fn
 */
function memoize(fn) {
    let CACHE = new Map()
    return function (...args) {
        let Args = args.join("_")
        if (!CACHE.has(Args)) CACHE.set(Args, fn(...args))
        return CACHE.get(Args)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */