/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (t, s) {
    const l_t = t.length;
    const l_s = s.length;
    let A = [];
    while (s !== "".padStart(l_s, "*")) {
        let c = false;//changed flag
        for (let [l, r] = [0, l_t]; r <= l_s;) {
            if (s.slice(l, r) !== "".padStart(l_t, "*")) {
                let b = true;//ok match flag
                for (let i = l; b && i < r; ++i) {
                    if (s.charAt(i) !== "*" && s.charAt(i) !== t.charAt(i - l)) { b = false; }
                }
                //console.log(`testing ${s.slice(l, r)} -> ${b}`)
                if (b) {
                    s = s.slice(0, l) + "".padStart(l_t, "*") + s.slice(r);
                    c = true;
                    A.unshift(l);
                }
            }
            ++l;
            ++r;
        }
        if (!c) return [];
        //console.log(s);
    }
    return A;
};