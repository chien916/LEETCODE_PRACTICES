/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()w
 * @return {function}
 */
var solution = function (read4) {

    let file_a = null;
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        //read entire file
        if (file_a === null) {
            file_a = [];
            for (let running_b = true; running_b;) {
                let helper_a = Array(4).fill().map(() => null);
                read4(helper_a);
                for (let it_n of helper_a) {
                    if (it_n === null) {
                        running_b = false;
                        break;
                    }
                    file_a.push(it_n);
                }
            }
        }
        //slice file and give it to buf
        let count_n = 0;
        while (file_a.length > 0 && count_n < n) {
            buf.push(file_a.shift());
            ++count_n;
        }
        return count_n;
    };
};