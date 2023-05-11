/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
    /**
     * 知识点: 
     */

    //first convert to list-based rep of graph
    let lbGraph_A = Array(n).fill().map(() => []);
    for (let it_A of edges) {
        lbGraph_A[it_A[0]].push(it_A[1]);
        lbGraph_A[it_A[1]].push(it_A[0]);
    }

    //pre-order dfs to get non-shifted sum and count
    let sum_A = Array(n).fill(0);
    let count_A = Array(n).fill(1);//1 because 
    let preDfs = (curr_n, prev_n) => {
        for (let it_n of lbGraph_A[curr_n]) {
            if (it_n === prev_n) continue;
            preDfs(it_n, curr_n);
            count_A[curr_n] += count_A[it_n];
            sum_A[curr_n] += sum_A[it_n] + count_A[it_n];
        }
    }
    preDfs(0, -1);
    //Up until this point, the sum is accurate ONLY for root node, and all other sums
    //remains partial and incomplete.

    let postDfs = (curr_n, prev_n) => {
        for (let it_n of lbGraph_A[curr_n]) {
            if (it_n === prev_n) continue;
            //make the child the root node, push the original root node to the left usbnode
            sum_A[it_n] = sum_A[curr_n]
                - (count_A[it_n]) //on the right, one layer less
                + (n - count_A[it_n]);//on the left, one layer more
            postDfs(it_n, curr_n);
        }
    };
    postDfs(0, -1);

    return sum_A;

};

sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);