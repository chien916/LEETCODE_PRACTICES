/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res_nA = [];
    for (let bound_O = { minRow: 0, minCol: 0, maxRow: matrix.length, maxCol: matrix[0].length }
        ; bound_O.minRow <= bound_O.maxRow && bound_O.minCol <= bound_O.maxCol
        ;) {
        let currCoor_O = { row: bound_O.minRow, col: bound_O.minCol };
        for (let travTimes_n = 0; travTimes_n <= 1; updateCurrCoor_f(currCoor_O, bound_O)) {
            if (currCoor_O.row === bound_O.minRow && currCoor_O.col === bound_O.minCol)
                ++travTimes_n;
            res_nA.push(matrix[currCoor_O.row][currCoor_O.col]);
        }
    }
};

var updateCurrCoor_f = (coor_O, bound_O) => {
    let moveHori_n = 0;
    let moveVert_n = 0;
    if (coor_O.row === bound_O.minRow) {
        [moveHori_n, moveVert_n] = [1, 0];
    } else if (coor_O.col === bound_O.maxCol) {
        [moveHori_n, moveVert_n] = [0, 1];
    } else if (coor_O.row === bound_O.maxRow) {
        [moveHori_n, moveVert_n] = [-1, 0];
    } else if (coor_O.col === bound_O.minCol) {
        [moveHori_n, moveVert_n] = [0, -1];
    }
    while (
        !(bound_O.minRow <= (coor_O.row + moveVert_n) && (coor_O.row + moveVert_n) <= bound_O.maxRow)
        || !(bound_O.minCol <= (coor_O.col + moveHori_n) && (coor_O.col + moveHori_n) <= bound_O.maxCol)) {
        if (moveHori_n > 0)
            [moveHori_n, moveVert_n] = [0, 1];
        else if (moveVert_n > 0)
            [moveHori_n, moveVert_n] = [-1, 0];
        else if (moveHori_n < 0)
            [moveHori_n, moveVert_n] = [0, -1];
        else if (moveVert_n < 0)
            [moveHori_n, moveVert_n] = [0, 0];
    }
    coor_O.row += moveVert_n;
    coor_O.col += moveHori_n;
}

c = { row: 0, col: 0 };
b = { minRow: 0, maxRow: 0, minCol: 0, maxCol: 2 }
for (let i = 0; i < 100; ++i) {
    updateCurrCoor_f(c, b);
    console.log(c);
}
