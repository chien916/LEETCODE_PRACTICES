/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    let m_n = 1337;
    let res_n = 1;

    while(b>0){
        let lastBit_n = b&1;
        if(lastBit_n>0){
            res_n = (res_n * a) % m_n;
        }
        a = (a * a) % m_n;
        b = b<<1;
    }

    return res_n;
};