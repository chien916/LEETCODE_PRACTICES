/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks_nA) {
    let difficultyCountMap_M = new Map();
    tasks_nA.forEach((it_n) => {
        if (difficultyCountMap_M.has(it_n))
            difficultyCountMap_M.set(it_n, difficultyCountMap_M.get(it_n) + 1);
        else
            difficultyCountMap_M.set(it_n, 1);
    });
    let minRounds_n = 0;
    let stopFlag = false;
    difficultyCountMap_M.forEach((val_n, key_n) => {
        if (stopFlag) return;
        let multiplesOfThree_n = Math.floor(val_n / 3);
        let remainderOfThree_n = val_n % 3;
        if (remainderOfThree_n === 0) minRounds_n += multiplesOfThree_n;
        else if (remainderOfThree_n === 2) minRounds_n += (multiplesOfThree_n + 1);
        else if (multiplesOfThree_n > 0) minRounds_n += (multiplesOfThree_n - 1 + 2);
        else stopFlag = true;
    })
    if (stopFlag) return -1;
    else return minRounds_n;
};