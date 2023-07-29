/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (R) {
    if (!R) return 0;
    let a = 0;
    let dfs = (N) => {
        //require release none
        //if (!N.left && !N.right) return "require";
        let [s_l, s_r] = ["none", "none"];
        if (N.left) s_l = dfs(N.left);
        if (N.right) s_r = dfs(N.right);
        if (s_l === "require" || s_r === "require") {
            ++a;//put a camera on the current node
            return "release";
        } else if (s_l === "release" || s_r === "release") {
            //shined by children node's camera
            return "none";
        } else {
            //not shined by children camera but children needs no camera
            return "require";
        }
    }
    let s_r = dfs(R);
    if (s_r === "require") ++a;//root need a camera
    return a;
};