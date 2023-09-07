/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (E, V, Q) {
    let C = new Map();//connections [curr,[conn var,conn multipler]]
    let l_e = E.length;
    for (let i = 0; i < l_e; ++i) {
        let [v, v_] = E[i];
        let m = V[i];//multiplier
        if (!C.has(v)) { C.set(v, new Map()); }
        C.get(v).set(v_, m);
        if (!C.has(v_)) { C.set(v_, new Map()); }
        C.get(v_).set(v, 1 / m);
    }
    let dfs = (v_f, v_t, V = new Set()) => {
        //console.log(v_f, v_t)
        for (let [k, v] of C.get(v_f)) {//connectable variable,multipler
            if (!V.has(k)) {
                V.add(k);
                let r = (k === v_t) ? 1 : dfs(k, v_t, V);//multiplier from k to v_t
                if (r !== -1) {//path found!
                    return r * v;
                }
                V.delete(k);
            }
        }
        return -1;//no path found
    }
    let A = [];
    for (let [v1, v2] of Q) {
        //console.log('--------------')
        if (!C.has(v1) || !C.has(v2)) A.push(-1.0);//non recognizable variables
        else A.push(dfs(v1, v2));
    }
    return A;
};

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]))