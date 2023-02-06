

/**
 * @param {number} n
 * @return {number}
 * 思路：
 * 1.一次看2*2个格子
 * 2.看完这个2*2就看下一个，但是新看的左边俩是刚刚看的右边俩
 * 3.记录下到目前为止有多少可能性
 * 4.利用回溯法，把当前状态传递到下一个状态
 *
 */
var numTilings = function (n) {
    const DEBUG_b = false;
    if (n === 1) return 1;//boundary case
    let totalWaysCount_n = 0;
    const PLACEMENTS_nA =
        [0b1010//place one domino vertically
            , 0b1100, 0b0011//place one domino horizontally
            , 0b1111//place two dominos horizontally
            , 0b1110, 0b1101, 0b0111, 0b1011//place one tromino 
            , 0b0000//place nothing

        ];
    let memoryMap_M = new Map();
    let nextState_f
        = (currGrid_n, currN_n) => {
            if (currN_n === n - 1) {
                totalWaysCount_n
                    += !!((currGrid_n & 0b1000) && (currGrid_n & 0b0010)
                        || !(currGrid_n & 0b1000) && !(currGrid_n & 0b0010));
                if (DEBUG_b)
                    if (((currGrid_n & 0b1000) && (currGrid_n & 0b0010)
                        || !(currGrid_n & 0b1000) && !(currGrid_n & 0b0010)))
                        console.log(Array(currN_n).fill("-").join("")
                            + "FOUND");
                return;
            }
            for (let placement_n of PLACEMENTS_nA) {
                // console.log(Array(currN_n).fill("-").join("")
                //     + "Trying " + placement_n.toString(2));
                if ((placement_n & currGrid_n) !== 0b0000) continue;
                let placedGrid_n = placement_n | currGrid_n;
                if (!(placedGrid_n & 0b1000 && placedGrid_n & 0b0010)) continue;
                if (DEBUG_b)
                    console.log(Array(currN_n).fill("-").join("")
                        + "Placed " + placement_n.toString(2));

                nextState_f(
                    (placedGrid_n & 0b0101) << 1, currN_n + 1
                );
            }
        };
    nextState_f(0b0000, 0, 0);
    return totalWaysCount_n;
};

console.log(numTilings(30));