/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let _return_sA = [];
    let backtrack_f = (currNode_f, currStr_s) => {
        let _currStr_s = currStr_s.concat("->", currNode_f.val);
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
    return _return_sA;
};

let input = new TreeNode(1,2,3);