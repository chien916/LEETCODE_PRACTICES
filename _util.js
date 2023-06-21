// //二叉树类题型结构定义
// let util = require("./_util");
// let TreeNode = util.TreeNode;
// let formBinaryTree = util.formBinaryTree;

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
exports.PriorityQueue = PriorityQueue;

