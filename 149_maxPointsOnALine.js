/**
 * @param {number[][]} points
 * @return {number}
 * 线段扫射：
 * 1.选定一个点作为参考点，与其他所有每一个点算斜率
 * 2.数数有多少个斜率是相等的，相等斜率意味着他们在同一条线上
 * 
 * 犯的错误：
 * 1. 对于斜率来说，两条线斜率的绝对值相等不一定他们在一条直线上（有可能垂直于彼此）
 * 2. 保证左右或者保证上下算出来的斜率 不用算绝对值 斜率相等则一定在一条直线上
 */
var maxPoints = function (points) {
    let getSlope = (p1_nA, p2_nA) => {
        return ((p2_nA[1] - p1_nA[1]) / (p2_nA[0] - p1_nA[0]));//!
    }
    let currMaxCount_n = 1;//
    for (let i_n = 0; i_n < points.length; ++i_n) {
        let slopesMap_M = new Map();
        for (let j_n = 0; j_n < points.length; ++j_n) {
            if (i_n === j_n) continue;
            let sortedPointPair_nAA = [points[i_n],points[j_n]].sort((a_nA,b_nA)=>a_nA[0]-b_nA[0]);//!
            let currAbsSlope_n = getSlope(sortedPointPair_nAA[0],sortedPointPair_nAA[1]);//!
            if (slopesMap_M.has(currAbsSlope_n))
                slopesMap_M.set(currAbsSlope_n, slopesMap_M.get(currAbsSlope_n) + 1)
            else
                slopesMap_M.set(currAbsSlope_n, 2);//
        }
        currMaxCount_n = Math.max(...slopesMap_M.values(), currMaxCount_n);
    }
    return currMaxCount_n;
};

// maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
maxPoints([[0,0],[1,-1],[1,1]])