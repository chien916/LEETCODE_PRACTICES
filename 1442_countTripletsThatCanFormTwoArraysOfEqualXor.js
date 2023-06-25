/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (A) {
    /**
     * ***Properties of Bitwise XOR***
     * -> Associtivity: A^(B^C) = (A^B)^C
     * -> Self-Inverse: A^B = B^A
     * -> Identity:     A^0 = A
     * 
     * Pre-XOR-Sum
     * Xor[0:i] ^ Xpr[i+1:j] = Xor[0:j]
     * Xor[i+1:j] = Xor[0:j] ^ Xor[0:i]
     * A[i+1] ^ A[i+2] ^ ... ^ A[j] = X[j] ^ X[i]
     */
    let X = [A[0]]
    let M = new Map()
    M.set(A[0], [0])
    if(!M.has(0)) M.set(0,[])
    M.get(0).push(-1)
    //M.set(0,-1)
    for (let i = 1; i < A.length; ++i) {
        X[i] = (X[i - 1] ^ A[i])
        if (!M.has(X[i])) M.set(X[i], [])
        M.get(X[i]).push(i)
        //M.set(X[i], i)
    }
    let ans = 0
    /**
     * Xor[i:j-1] = Xor[j:k] (Given)
     * Xor[i:j-1]^Xor[j:k] = 0
     * Xor[i:k] = 0
     * Xor[0:k]^Xor[0:i] = 0
     * X[k]^X[i] = 0
     * X[k] = X[i]
     * i<j<=k
     */
    //start from -1 because X[i]^X[j] gives Xor[i+1:j]
    for (let i = -1; i < A.length - 1; ++i) {
        let key = i===-1?0:X[i]
        if (M.has(key)) {
            for (let k of M.get(key))
                if (i < k) ans += (k - i-1)//
        }
    }
    return ans

};

console.log(countTriplets([2,3,1,6,7]))
console.log(countTriplets([1,1,1,1,1]))