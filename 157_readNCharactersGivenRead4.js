/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let actualRead_n = 0;
        let running_b = true;
        while (running_b && n > 0) {
            let tempRead_a = [null, null, null, null];
            read4(tempRead_a);
            for (let read_n of tempRead_a) {
                console.log(read_n);
                if (!(n > 0) || read_n === null) {
                    running_b = false;
                    break;
                }
                buf[actualRead_n] = read_n;
                ++actualRead_n;
                --n;
            }
        }
        return actualRead_n;
    };
};