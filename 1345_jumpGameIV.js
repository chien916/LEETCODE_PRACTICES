/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    if (arr.length === 1) return 0;
    //hmap to record all index that has the same value
    let hMap = new Map();
    arr.forEach((it_n, ind_n) => {
        if (!hMap.has(it_n)) hMap.set(it_n, [ind_n]);
        else hMap.get(it_n).push(ind_n);
    });

    let queue_A = [];
    let visited_A = Array(arr.length).fill(false);

    let step_n = 0;
    //bfs driver
    queue_A.push(0);
    visited_A[0] = true;

    //bfs process
    while (queue_A.length > 0) {
        let i_n = queue_A.length - 1;
        for (; i_n >= 0; --i_n) {
            //console.log(queue_A);
            let cInd_n = queue_A.shift();
            //cond1
            if (cInd_n + 1 <= visited_A.length - 1
                && !visited_A[cInd_n + 1]) {
                visited_A[cInd_n + 1] = true;
                queue_A.push(cInd_n + 1);
            }
            //cond2
            if (cInd_n - 1 >= 0
                && !visited_A[cInd_n - 1]) {
                visited_A[cInd_n - 1] = true;
                queue_A.push(cInd_n - 1);
            }
            //cond3
            if (hMap.has(arr[cInd_n])) {
                hMap.get(arr[cInd_n]).forEach((it_n) => {
                    if (!visited_A[it_n]) {
                        visited_A[it_n] = true;
                        queue_A.push(it_n);
                    }
                });
                hMap.delete(arr[cInd_n]);
            }
        }
        ++step_n;
        if (visited_A[visited_A.length - 1]) return step_n;
    }
    return -1;
};

console.log(minJumps([7,7,2,1,7,7,7,3,4,1]))