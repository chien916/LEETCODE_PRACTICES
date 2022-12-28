/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let grid_nA = new Uint16Array(9);
    let row_nA = new Uint16Array(9);
    let col_nA = new Uint16Array(9);
    for (let currRowInd_n = 0; currRowInd_n < 9; ++currRowInd_n) {
        for (let currColInd_n = 0; currColInd_n < 9; ++currColInd_n) {
            let currNumber_n = parseInt(board[currRowInd_n][currColInd_n]);
            if (isNaN(currNumber_n)) continue;
            //check grid
            let gridInd_n = 3 * (Math.floor(currRowInd_n / 3)) + Math.floor(currColInd_n / 3);
            if ((grid_nA[gridInd_n] & (1 << currNumber_n)) !== 0) return false;
            else grid_nA[gridInd_n] |= (1 << currNumber_n);
            //check row
            if ((row_nA[currRowInd_n] & (1 << currNumber_n)) !== 0) return false;
            else row_nA[currRowInd_n] |= (1 << currNumber_n);
            //check column
            if ((col_nA[currColInd_n] & (1 << currNumber_n)) !== 0) return false;
            else col_nA[currColInd_n] |= (1 << currNumber_n);
        }
    }
    return true;
};

let board = [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board));
