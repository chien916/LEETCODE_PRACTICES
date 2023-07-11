/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (A_r, T_p) {
    let l_r = A_r.length;
    let l_p = T_p.length;

    let s_r_max = (1n << BigInt(l_r)) - 1n;
    let s_p_max = (1n << BigInt(l_p)) - 1n;

    //required skill name to bitmask index
    let M_s = new Map();
    for (let i = 0; i < l_r; ++i) {
        M_s.set(A_r[i], i);
    }

    //people index to skillset bitmask
    let M_p = Array(l_p).fill(0n);
    for (let i = 0; i < l_p; ++i) {
        for (let j = 0; j < T_p[i].length; ++j) {
            let _r = T_p[i][j];
            if (!M_s.has(_r)) continue;//skill not needed
            M_p[i] |= (1n << BigInt(M_s.get(_r)));
        }
    }

    let __cache_pop_count = new Map();
    let pop_count = (s) => {
        let s_ = s;
        if (!__cache_pop_count.has(s_)) {
            let c = 0;
            while (s) {
                s &= (s - 1n);
                ++c;
            }
            __cache_pop_count.set(s_, c);
        }
        return __cache_pop_count.get(s_);
    }

    let Dp = [];
    for (let i = 0; i <= s_r_max; ++i) {
        Dp.push(s_p_max);
    }
    //let Dp = Array(s_r_max + 1).fill().map(() => s_p_max);

    Dp[0] = 0n;//init driver

    let to_string = (s, n) => {
        return s.toString(2).split("").reverse().join("").padStart(n, "0");
    }

    for (let i = 0; i < l_p; ++i) {//for every person used
        for (let j = 0n; j <= s_r_max; ++j) {//current previous state (skillset)
            if (j & (1n << j)) continue;
            let j_ = j | M_p[i];//unioned skillset bitmask
            let dp_ = Dp[Number(j)] | (1n << BigInt(i))//unioned people bitmask
            //console.log(`Loop[${i}][${to_string(j, l_r)}] -> Skill:${to_string(j_, l_r)} P:${to_string(dp_, l_p)}`);
            if (pop_count(dp_) < pop_count(Dp[j_])) {
                Dp[Number(j_)] = dp_;
            }
        }
    }

    //answer formation
    let ans = [];
    for (let i = 0; i < l_p; ++i) {
        if (Dp[s_r_max] & (1n << BigInt(i))) ans.push(i);
    }
    return ans;
};

console.log(smallestSufficientTeam(["vmp", "cejckmmcjrudprv", "fzkmqsrh", "jbmumj", "ofdsjdcqhiddkafd", "msruxmmadhpixav"],
    [["vmp", "fzkmqsrh"], [], ["ofdsjdcqhiddkafd"], ["cejckmmcjrudprv", "ofdsjdcqhiddkafd"], ["fzkmqsrh"], ["ofdsjdcqhiddkafd"], ["vmp", "cejckmmcjrudprv"], [], [], [], ["fzkmqsrh"], ["vmp", "fzkmqsrh"], [], [], ["vmp"], ["cejckmmcjrudprv", "fzkmqsrh", "msruxmmadhpixav"], ["jbmumj"], ["vmp", "ofdsjdcqhiddkafd"], ["fzkmqsrh", "ofdsjdcqhiddkafd", "msruxmmadhpixav"], ["cejckmmcjrudprv", "ofdsjdcqhiddkafd"], ["ofdsjdcqhiddkafd", "msruxmmadhpixav"], ["ofdsjdcqhiddkafd", "msruxmmadhpixav"], ["vmp", "cejckmmcjrudprv", "msruxmmadhpixav"], ["cejckmmcjrudprv", "jbmumj", "ofdsjdcqhiddkafd"], [], ["cejckmmcjrudprv"], ["ofdsjdcqhiddkafd"], ["msruxmmadhpixav"], [], ["vmp", "cejckmmcjrudprv", "msruxmmadhpixav"], ["vmp", "ofdsjdcqhiddkafd"], [], [], [], ["cejckmmcjrudprv", "jbmumj", "ofdsjdcqhiddkafd"], [], ["vmp"], ["vmp", "cejckmmcjrudprv"], [], [], ["vmp", "msruxmmadhpixav"], [], ["msruxmmadhpixav"], ["ofdsjdcqhiddkafd"], ["vmp"], [], ["fzkmqsrh"], ["jbmumj"], [], []]))