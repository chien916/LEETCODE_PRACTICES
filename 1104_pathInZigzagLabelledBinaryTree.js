/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (i_init) {
    /**
     * Theorm:
     * If a binary tree is ordered ,then the height of a node
     * is log2(i) where i is the index of node starting from 1
     *       1 -> log2(1)
     *     10 11
     *  100 101 110 111
     * The first node on layer l has value of 2**l 
     * The last node on layer l has value of 2**(l+1) - 1
     * 
     * When node in even heights are flipped:
     * i = original index ; i' = flipped index
     * i - 2**l = 2**(l+1) - 1  - i'
     * i'= 2**(l+1) - 1 - i + 2**l
     */
    let flip = (i, l) => {
        let ans = i;
        if (l % 2 > 0) ans = 2 ** (l + 1) - 1 - i + 2 ** l;
        console.log(`${i} -> ${ans}`)
        return ans;
    }
    let l = Math.floor(Math.log2(i_init));//current layer
    let i_orig = flip(i_init,l);
    let Ans = [];
    while (l >= 0) {
        let i_actu = flip(i_orig,l);
        Ans.unshift(i_actu);
        i_orig >>>= 1;
        --l;
    }
    return Ans;
};