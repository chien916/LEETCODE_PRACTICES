/**
 * @return {character[][]}
 */
var updateBoard = function(board_sAA, click_nA) {
    let unrevealed_S = new Set();
    let gameOver_b = false;
    board_sAA.forEach((r_sA,rInd_n)=>{r_sA.forEach((_,cInd_n)=>{unrevealed_S.add([rInd_n,cInd_n])})});
    let onBlockClicked_f = function (click_nA){
        let currBlock_s = board_sAA[click_nA[0],click_nA[1]];
        if(currBlock_s==="M"){
            currBlock_s = "X";
            gameOver_b = true;
            return;
        }else if(currBlock_s==="")
    }
    while(unrevealed_S.size>0){
        
    }
    return board_sAA;
};


let board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0];
updateBoard(board,click);