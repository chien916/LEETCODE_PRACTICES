/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (V) {
    /**
     * Theorm:
     * 1-> a XOR a = 0
     * 
     * To get the rightmost bit = a AND (-a)
     * Position of that bit = floor(log2(ans))+1
     */
    let M = Array(32).fill(0);
    let ans = 0;
    let to_string = (n) => {
        let ans = "";
        for (let i = 0; i < 32; ++i) {
            ans = ((n & (1 << i))?"1":"0") + ans;
        }
        return ans;
    }
    for (let n of V) {
        while (n) {
            let x = (n & (-n));
         //   console.log(to_string(n))
            /**
             * adding 1 will result in 1-indexed
             * adding 1 is valid for counting ONLY
             */
            let p = Math.floor(Math.log2(x>>>0));
            if ((M[p] = (M[p] + 1) % 3) === 1) {
                ans = ans | x;
            } else {
                ans = ans & (~x);
            }
            n = n & (~x);//clear that bit
            //console.log(M)
        }
       // console.log('\n')
    }
    return ans;
};
console.log(singleNumber([-4]))