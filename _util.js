function asList(arr_n) {
	if (arr_n.length === 0) return null;
	let currHead_T = new ListNode();
	currHead_T.val = arr_n[0];
	currHead_T.next = asList(arr_n.slice(1));
	return currHead_T;
}

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}


function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

exports.ListNode = ListNode;
exports.TreeNode = TreeNode;
exports.asList = asList;