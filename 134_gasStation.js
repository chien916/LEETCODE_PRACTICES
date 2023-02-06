/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas_b = 0;
    for (let currStartingInd_n = 0; currStartingInd_n < gas.length; ++currStartingInd_n) {
        let currGas_n = totalGas_b;
        for (let currTravellingInd_n = currStartingInd_n;currTravellingInd_n<gas.length ;++currTravellingInd_n) {
            currGas_n += gas[currTravellingInd_n];
            currGas_n -= cost[currTravellingInd_n];
            let nextInd_n = (currTravellingInd_n === gas.length - 1) ?  0: currTravellingInd_n + 1;
            if (currGas_n < 0) break;
            else currTravellingInd_n = nextInd_n;
        }
    }
    return -1;
};

// canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])
canCompleteCircuit([2,3,4],[3,4,3])