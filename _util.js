// //二叉树类题型结构定义
// let util = require("./_util");
// let TreeNode = util.TreeNode;
// let formBinaryTree = util.formBinaryTree;
// let printBinaryTree = util.printBinaryTree;

// //链表类题型结构定义
// let util = require("./_util");
// let ListNode = util.ListNode;
// let formLinkedList = util.formLinkedList;

// //优先队列结构定义
// let util = require("./_util");
// let PriorityQueue = util.PriorityQueue;

// //设计问题结构定义
// let util = require("./_util");
// let formDesignExpr = util.formDesignExpr;
// let evalDesignExpr = util.evalDesignExpr;

// //LODASH结构定义
// let util = require("./_util");
// let _ = util.Lodash;
// let evalDesignExpr = util.evalDesignExpr;

function formDesignExpr(funcNames_a, args_a, instanceName_s) {
	let _init_s = (`new ${funcNames_a[0]}(${args_a[0].join(",")});`);
	let _exp_a = [];
	console.assert(funcNames_a.length === args_a.length, "FUNC ARGS LENGTH DIFF");
	for (let i_n = 1; i_n < funcNames_a.length; ++i_n) {
		_exp_a.push(`${instanceName_s}.${funcNames_a[i_n]}(${args_a[i_n].join(",")});`);
	}
	return [_init_s, _exp_a];
}

function evalDesignExpr(exp_a, instance) {
	let _INSTANCE = instance;
	let _ret_a = [];
	for (let _EXPR of exp_a) {
		let ret = eval(_EXPR);
		console.log(_EXPR + " -> " + ret);
		_ret_a.push(ret);
	}
	return _ret_a;
}

function formLinkedList(arr_n) {
	if (arr_n.length === 0) return null;
	let currHead_L = new ListNode();
	currHead_L.val = arr_n[0];
	currHead_L.next = formLinkedList(arr_n.slice(1));
	return currHead_L;
}

function formBinaryTree(arr_n) {
	let topHead_T = null;
	let maxInd_n = arr_n.length - 1;
	let recusify_f = (prevNode_T, currInd_n) => {
		if (currInd_n > maxInd_n) return;
		if (!topHead_T) {
			prevNode_T = new TreeNode(arr_n[currInd_n], null, null);
			topHead_T = prevNode_T;
		}
		if (2 * currInd_n + 1 <= maxInd_n && arr_n[2 * currInd_n + 1]) {
			prevNode_T.left = new TreeNode(arr_n[2 * currInd_n + 1], null, null);
			recusify_f(prevNode_T.left, 2 * currInd_n + 1);
		}
		if (2 * currInd_n + 2 <= maxInd_n && arr_n[2 * currInd_n + 2]) {
			prevNode_T.right = new TreeNode(arr_n[2 * currInd_n + 2], null, null);
			recusify_f(prevNode_T.right, 2 * currInd_n + 2);
		}
	}
	recusify_f(null, 0);
	return topHead_T;
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


function printBinaryTree(R) {
	//get height of tree (1-beginning)
	let dfs = (_T, _h = 1) => {
		return Math.max(
			((_T.left) ? dfs(_T.left, _h + 1) : 0),
			((_T.right) ? dfs(_T.right, _h + 1) : 0),
			_h
		);
	}
	let h = R ? dfs(R) : 0;
	let w = 2 ** h - 1;
	let Ans = Array(h).fill().map(() => Array(w).fill().map(() => "   "));
	//0<=i<h 0<=j<w
	let dfs2 = (_T, i, j_lo, j_hi) => {//j_lo and j_hi is inclusive
		let j_mid = j_lo + ((j_hi - j_lo) >>> 1);
		Ans[i][j_mid] = _T.val.toString().padEnd(3,"_");
		if (_T.left) dfs2(_T.left, i + 1, j_lo, j_mid - 1);
		if (_T.right) dfs2(_T.right, i + 1, j_mid + 1, j_hi);
	}
	if (R) dfs2(R, 0, 0, w - 1);
	let ToPrint = "";
	for (let Row of Ans) {
		for (let ele of Row) {
			ToPrint += ele;
		}
		ToPrint += "\n";
	}
	console.log(ToPrint);
};

const {
	PriorityQueue,
	MinPriorityQueue,
	MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

const LoDash = require('lodash/core');

exports.LoDash = LoDash;
exports.ListNode = ListNode;
exports.TreeNode = TreeNode;
exports.formLinkedList = formLinkedList;
exports.formBinaryTree = formBinaryTree;
exports.formDesignExpr = formDesignExpr;
exports.evalDesignExpr = evalDesignExpr;
exports.printBinaryTree = printBinaryTree;
exports.PriorityQueue = PriorityQueue;

