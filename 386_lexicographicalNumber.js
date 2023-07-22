
var lexicalOrder = function (n_max) {
    let n_c = 1;//current
    let A = [1];//answer
    while (n_c <= n_max) {
        if (n_c * 10 <= n_max) {//extend digit
            A.push(n_c *= 10);
            //console.log(`bra 1 -> ${n_c}`)
        } else if (n_c % 10 !== 9 && n_c + 1 <= n_max) {//increment
            A.push(++n_c);
            //console.log(`bra 2 -> ${n_c}`)
        } else {//deleting digit required
            while (n_c === n_max || n_c % 10 === 9) {
                n_c = Math.floor(n_c / 10);
            }
            if (n_c === 0) break;
            A.push(++n_c);
            //console.log(`bra 3 -> ${n_c}`)
        }
    }
    return A;
};
lexicalOrder(99);