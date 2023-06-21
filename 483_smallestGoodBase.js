/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
    /**
     * THEORMS:
     * -- GEOMETRIC PROGRESSION --
     * for(i=0;i<m;++i) sum+= a*(i**m)
     * ==> a*m                  when r == 1
     * ==> a*(r**m-1)/(r-1)     when r != 1
     * 
     * OBSERVATIONS:
     * For base k that satisfies n.toString(k) === "111...1",
     * each term can be represented by TERM = k**i where i = [0:m-1] where m = floor(log(k)/log(k))+1
     * their sum can be represented by SUM = (k**m-1)/(k-1) = n
     * 
     * We are looking for a pair of (m,k) such that (k**m-1)/(k-1) = n
     * 
     * k -> the value of "base" 
     * m -> the number of digits of n with base k
     * We have two possibilities here:
     * 1. Iterating thru k, binary searching for m.
     * 2. Iterating thru m, binary searching for k.
     * As there's more candidates of than that of m 
     * -> Since log2(1e8) ~= 60, a bare maximum trials of 60 for m is needed !
     * 
     * -- INEQUALITY SCALING --
     * n            =   (k**m-1)/(k-1) 
     * n*(k-1)      =   k**m-1
     * n*k-n        =   k**m-1
     * n*k-n+1      =   k**m
     * n*k-n        >   k**m
     * n*k          >   k**m
     * n            >   k**m/k  (given that k>=1, which is satisified)
     * n            >   k**(m-1)
     * k**(m-1)     <   n
     * k            <   n**(1/(m-1))
     * k            <   ceil(n**(1/(m-1))) 
     * 
     * We'll binary searching k within range of [2:ceil(n**(1/(m-1)))]
     */
    let _n = BigInt(n)
    for (let m = 60; m >= 2; --m) {//skipping m = 1 as 0 becomes denominator
        let [_bl, _br] = [BigInt(2), BigInt(Math.ceil(n ** (1 / (m - 1))))]
        let _m = BigInt(m)
        //console.log(`m = ${m}`)
        while (_bl <= _br) {
            let _bm = _bl + (_br - _bl) / 2n
            let _sum = (_bm ** _m - 1n) / (_bm - 1n)
            if (_sum === _n) return _bm.toString()
            else if (_sum > _n) _br = _bm - 1n
            else _bl = _bm + 1n
        }
    }
    return (_n - 1n).toString()
};

console.log(smallestGoodBase("1000000000000000000"))