/**
 * @param {number[][]} trees_nAA
 * @return {number[][]}
 */
var outerTrees = function (trees_nAA) {
    /**
     * 思路：
     * 
     * Graham Scan
     * 1.选定一个最低点，将此点作为一个坐标零点，计算所有其他点相对于零点的polar angle
     * 2.将所有点以polar angle进行排序
     * 3.遍历所有点，三个为一组，初始组为[零点，点[0],点[1]]
     * 4.计算这三个点的相对斜率，x1,y1 x2,y2 x3,y3
     *  其中这三个点的相对位置有三种情况
     *  1.顺时针：  点2点3的斜率 小于 点1点2的斜率
     *  2.同线：    点2点3的斜率 等于 点1点2的斜率
     *  3.逆时针：  点2点3的斜率 大于 点1点2的斜率
     * 如果我们从小polar angle到大polar angle开始尝试，
     * 那么逆时针是我们所期望的，顺时针不是我们所期望的
     * 对于同线来说，可以丢弃第二个点
     * 
     * 错误1：定义以angle angle为参考排序的比较方程时，
     * 需要考虑两个点在同一条线上怎么办，这里的处理方式时利用距离从小到大排列
     * 
     * 错误2：排序方程前后顺序问题：
     * 从小到达排序：a-b
     * 从大到小排序：-a+b
     * 
     * 错误3：有向面积计算
     * 不可以两个斜率做减法，要有有向面积计算
     * 三点的有向面积 = (x2-x1)*(y3-y1) - (y2-y1)*(x3-x1)
     * 
     * 错误4：初始值的寻找
     * 对于逆时针扫射，我们不仅需要找最靠下的，还要找最靠右的
     * 不然当有很多值与初始值y坐标相同
     * 
     * 错误5：针对于错误1，不能全部情况都利用距离从小到大排列
     * 如果这两点在左边，则从大到小 || 如果这两点在右边，则从小到大
     * 两点一定同时在左边或者右边，不然angle一定不一样
     * 不需要判断上下，因为零点在最初设置的是最下面，所有点均高于或等于零点
     * 
     */
    let findPolarAngle_nf = function (p1_nA, p2_nA) {
        return Math.atan2(p2_nA[1] - p1_nA[1], p2_nA[0] - p1_nA[0]);
    };
    // let findSlope_nf = function (p1_nA, p2_nA) {
    //     return (p2_nA[1] - p1_nA[1]) / (p2_nA[0] - p1_nA[0]);
    // };
    let findThreePointsRelat_nf = function (p1_nA, p2_nA, p3_nA) {
        let res_1_n = (p3_nA[1] - p2_nA[1]) * (p2_nA[0] - p1_nA[0]) - (p2_nA[1] - p1_nA[1]) * (p3_nA[0] - p2_nA[0]);
        let res_3_n = (p2_nA[0] - p1_nA[0]) * (p3_nA[1] - p1_nA[1]) - (p2_nA[1] - p1_nA[1]) * (p3_nA[0] - p1_nA[0]);
        //let res_2_n =  findSlope_nf(p3_nA, p2_nA) - findSlope_nf(p2_nA, p1_nA);//错误3
        return res_3_n;
    };
    let findDistance_nf = function (p1_nA, p2_nA) {
        return Math.pow(Math.pow(p2_nA[1] - p1_nA[1], 2) + Math.pow(p2_nA[0] - p1_nA[0], 2), 0.5);
    }
    let lowestPoint_nA = trees_nAA.reduce((currMin_nA, it_nA) => {
        if (it_nA[1] < currMin_nA[1]) return it_nA;
        else if (it_nA[1] > currMin_nA[1]) return currMin_nA;
        else if (it_nA[0] < currMin_nA[0]) return currMin_nA;//错误4
        else return it_nA;
    }, trees_nAA[0]);
    trees_nAA.sort((p1_nA, p2_nA) => {
        let angleDiff_n = findPolarAngle_nf(lowestPoint_nA, p1_nA)
            - findPolarAngle_nf(lowestPoint_nA, p2_nA);
        if (angleDiff_n === 0) {
            if(p1_nA[0]-lowestPoint_nA[0]>0){//on the right of lowst point
                return findDistance_nf(lowestPoint_nA, p1_nA)
                - findDistance_nf(lowestPoint_nA, p2_nA);//错误2：排列大小comparator
            }else{//on the left of lowest point
                return -findDistance_nf(lowestPoint_nA, p1_nA)
                + findDistance_nf(lowestPoint_nA, p2_nA);//错误2：排列大小comparator
            }
            //co-linear, return the further one relative to lowestPoint//错误5
        }

        else return angleDiff_n;
    });//错误1
    let ret_nAA = [lowestPoint_nA];
    trees_nAA.forEach((it_nA) => {
        //boundary cases -> found itself
        if (it_nA === lowestPoint_nA) return;
        //general cases
        ret_nAA.push(it_nA);
        while (ret_nAA.length >= 3
            && findThreePointsRelat_nf(ret_nAA[ret_nAA.length - 3]
                , ret_nAA[ret_nAA.length - 2], ret_nAA[ret_nAA.length - 1]
            ) < 0) {
            ret_nAA.splice(ret_nAA.length - 2, 1);//removes the second last element
        }
    });
    return ret_nAA;
};

let trees = [[0,2],[0,1],[0,0],[1,0],[2,0],[1,1]];
let expected = [[0,1],[2,0],[0,0],[1,1],[0,2],[1,0]];
let ans = outerTrees(trees);

let diff_nAA = [[], []];
expected.forEach((it_nA) => {
    let ind = ans.findIndex((it2_nA) => {
        return it_nA[0] === it2_nA[0] && it_nA[1] === it2_nA[1];
    });
    if (ind === -1) diff_nAA[0].push(it_nA);
})
ans.forEach((it_nA) => {
    let ind = expected.findIndex((it2_nA) => {
        return it_nA[0] === it2_nA[0] && it_nA[1] === it2_nA[1];
    });
    if (ind === -1) diff_nAA[1].push(it_nA);
})
//console.log(diff_nAA);
console.log(trees.map((it_nA) => it_nA[0]));
console.log(trees.map((it_nA) => it_nA[1]));

console.log(ans.map((it_nA) => it_nA[0]));
console.log(ans.map((it_nA) => it_nA[1]));
let i = 0;