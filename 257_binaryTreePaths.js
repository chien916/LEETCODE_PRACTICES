const {TreeNode} = require("./_util.js")
/*
* @param {TreeNode} root
* @return {string[]}
*/
var binaryTreePaths = function (root) {
    let _return_sA = [];
    let backtrack_f = (currNode_f, currStr_s) => {
        //知识点：输出类似箭头或者方向的标识时 第一个一定不要加
        let _currStr_s = currStr_s.concat(currStr_s === "" ? "" : "->", currNode_f.val);
        let [isLeftUnd_b, isRightUnd_b] = [currNode_f.left === null, currNode_f.right === null];
        if (isLeftUnd_b && isRightUnd_b) {
            _return_sA.push(_currStr_s);
            return;
        }
        if (!isLeftUnd_b) {
            backtrack_f(currNode_f.left, _currStr_s);
        }
        if (!isRightUnd_b) {
            backtrack_f(currNode_f.right, _currStr_s);
        }
    }
    backtrack_f(root, "");
    return _return_sA;
};

let input = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3));
binaryTreePaths(input);