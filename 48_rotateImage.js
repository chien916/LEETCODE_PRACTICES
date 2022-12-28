/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let layerInd_n = 0; layerInd_n < Math.floor(matrix.length / 2); ++layerInd_n) {
        const bound_O = { minRowCol: layerInd_n, maxRowCol: matrix.length - 1 - layerInd_n };
        let bFlag_O = { rx: false, tx: true, running: true };
        for (let currCoor_O = { row: layerInd_n, col: layerInd_n }; bFlag_O.running;) {
            if (bFlag_O.tx && !bFlag_O.rx) {
                matrix[currCoor_O.row][currCoor_O.col] += 1000;
            }
            if (bFlag_O.tx) {
                //left stores received +1000 shifted 16bits, right stores to be sent +1000
                //send value to destination (rotated) coordinate
                //-- let SendingVal_n = (matrix[currCoor_O.row][currCoor_O.col] | 0x0000ffff) - 1000;
                let SendingVal_n = (matrix[currCoor_O.row][currCoor_O.col] & 0x0000ffff) - 1000;
                let destCoor_O = getRotatedCoor_f(currCoor_O, bound_O);
                matrix[destCoor_O.row][destCoor_O.col] += 1000;
                matrix[destCoor_O.row][destCoor_O.col] |= ((matrix[currCoor_O.row][currCoor_O.col] & 0x0000ffff) << 16);
            }
            if (bFlag_O.rx) {
                //decode the received value and format it to original state=
                //-- let ReceivedVal_n = ((matrix[currCoor_O.row][currCoor_O.col] | 0xffff0000) >> 16) - 1000;
                matrix[currCoor_O.row][currCoor_O.col] >>= 16;
                matrix[currCoor_O.row][currCoor_O.col] -= 1000;
            }
            updateCurrCoor_f(currCoor_O, bound_O, bFlag_O);
        }
    }
};

var getRotatedCoor_f = (coor_O, bound_O) => {
    //coor_O = {row,col}
    //bound_O = {minRowCol,maxRowCol}
    if (coor_O.row === bound_O.minRowCol) {
        return { row: bound_O.minRowCol + (coor_O.col - bound_O.minRowCol), col: bound_O.maxRowCol };
    } else if (coor_O.col === bound_O.maxRowCol) {
        return { row: bound_O.maxRowCol, col: bound_O.maxRowCol - (coor_O.row - bound_O.minRowCol) };
    } else if (coor_O.row === bound_O.maxRowCol) {
        return { row: bound_O.maxRowCol - (bound_O.maxRowCol - coor_O.col), col: bound_O.minRowCol };
    } else if (coor_O.col === bound_O.minRowCol) {
        return { row: bound_O.minRowCol, col: bound_O.minRowCol + (bound_O.maxRowCol - coor_O.row) };
    }
}

var updateCurrCoor_f = (coor_O, bound_O, bFlag_O) => {
    //coor_O = {row,col}
    if (coor_O.row === bound_O.minRowCol) {
        if (coor_O.col === bound_O.maxRowCol) {
            ++coor_O.row;
        }
        else ++coor_O.col;
        //fsm changes
    } else if (coor_O.col === bound_O.maxRowCol) {
        if (coor_O.row === bound_O.maxRowCol) --coor_O.col;
        else ++coor_O.row;
    } else if (coor_O.row === bound_O.maxRowCol) {
        if (coor_O.col === bound_O.minRowCol) --coor_O.row;
        else --coor_O.col;
    } else if (coor_O.col === bound_O.minRowCol) {
        if (coor_O.row === bound_O.minRowCol) ++coor_O.col;
        else --coor_O.row;
    }

    //bFlag_O = { rx: false, tx: true, running: true }; ,+ initial state
    if (coor_O.row === bound_O.minRowCol && coor_O.col === bound_O.minRowCol) {
        if (bFlag_O.rx) bFlag_O.tx = false;
    } else if (coor_O.row === bound_O.minRowCol && coor_O.col === bound_O.maxRowCol) {
        if (bFlag_O.tx) bFlag_O.rx = true;
        else bFlag_O.running = false;
    }
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];rotate(matrix);
let i = 0;
// console.log(getNewCoor_f(, { minRowCol: 0, maxRowCol: 3 }))
