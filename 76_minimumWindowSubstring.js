/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    let A_t = Array(26 * 2).fill(0);
    let get_index = (c) => {
        if (c === c.toLowerCase())
            return c.charCodeAt(0) - 'a'.charCodeAt(0);
        else
            return 26 + c.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    for (let i = 0; i < t.length; ++i) {
        ++A_t[get_index(t.charAt(i))];
    }

    let A_ = Array(26 * 2).fill(0);
    let is_equal = (A1 = A_t, A2 = A_) => {
        if (A2.length !== A1.length) return false;
        for (let i = 0; i < A2.length; ++i) {
            if (A1[i] === 0) continue;
            if (A1[i] > A2[i]) return false;
        }
        return true;
    }
    let ans = "";
    let l_ans = Infinity;
    let l_s = s.length;
    for (let [i_l, i_r] = [0, 0]; i_l < l_s;) {
        while (!is_equal() && i_r < l_s) {
            ++A_[get_index(s.charAt(i_r++))];
        }
        if (is_equal()) {
            let _ans = s.substring(i_l, i_r);
            if (_ans.length < l_ans) {
                ans = _ans;
                l_ans = _ans.length;
            }
        }
        --A_[get_index(s.charAt(i_l++))];
        if (i_r < i_l) i_r = i_l;
        //increment TO-DO
        // i_r = i_l = i_l + 1; //TLE
        // A_ = Array(26 * 2).fill(0);
    }

    return ans;
};

// console.log(minWindow("ADOBECODEBANC", "ABC"))