/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
    //De Bruijin Sequence
    //Iterate k**n times -> hardcode this -> don't ask why 
    //MEMORIZE IT!
    let M = new Map()
    //let _Key = 
    let Ans = Array(n).fill().map(() => "0").join("")
    for (let i = 1; i < k ** n; ++i) {
        //[0,1,2,3,4] 
        //     | n = 4 -> key.length = 3 -> length - 
        let _key = Ans.slice(Ans.length - (n - 1))
        if (!M.has(_key)) M.set(_key, 0)
        M.set(_key, (M.get(_key) + 1) % k)//so that it will be 2 3 4 5 0 1 something like this)
        Ans += String.fromCharCode("0".charCodeAt(0) + M.get(_key))
    }
    return Ans
};

console.log(crackSafe(2, 2))