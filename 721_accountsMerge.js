/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    //map based disjoint set structure
    let _acc2root = new Map();
    let _acc2name = new Map();
    let _find = (email_s) => {
        if (!_acc2root.has(email_s)) _acc2root.set(email_s, email_s);
        let currParent_s = _acc2root.get(email_s);
        if (currParent_s === email_s) return email_s;
        else return (_acc2root.set(email_s, _find(currParent_s)).get(email_s));
    }
    let _union = (email1_s, email2_s) => {
        //console.log(`ATTEMPTING ${email1_s} - ${email2_s}`);
        email1_s = _find(email1_s);
        email2_s = _find(email2_s);
        //console.log(`REALITY ${email1_s} - ${email2_s}\n`);
        _acc2root.set(email2_s, email1_s);
    }
    //main
    for (let currAccount_A of accounts) {
        let currEmailMaster_s = _find(currAccount_A[1]);
        for (let i_n = 1; i_n < currAccount_A.length; ++i_n) {
            _union(currEmailMaster_s, currAccount_A[i_n]);
           _acc2name.set(currAccount_A[i_n],currAccount_A[0]);
           currEmailMaster_s = _find(currEmailMaster_s);
        };
    }
    //output formation
    let _ret_A = [];
    let acc2ind = new Map();
    for (let [k_s, v_s] of [..._acc2root]) {//curr,root
        v_s = _find(v_s);//error 1
        if (!acc2ind.has(v_s)) {
            _ret_A.push([_acc2name.get(v_s)]);
            acc2ind.set(v_s, _ret_A.length - 1);
        }
        let ind_n = acc2ind.get(v_s);
        _ret_A[ind_n].push(k_s);
    }
    for (let i_n = 0;i_n<_ret_A.length;++i_n) {
        _ret_A[i_n] = [_ret_A[i_n][0]].concat(_ret_A[i_n].slice(1).sort());
    }
    return _ret_A;
};

console.log(accountsMerge([["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]))