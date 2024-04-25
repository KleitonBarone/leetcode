/*
https://leetcode.com/problems/same-tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false



Constraints:

    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104



*/

// Definition for a binary tree node.
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }

    if (p === null) {
        return false;
    }

    if (q === null) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }

    const isSameLeft = isSameTree(p.left, q.left);

    if (isSameLeft === false) {
        return false;
    }

    const isSameRight = isSameTree(p.right, q.right);

    if (isSameRight === false) {
        return false;
    }

    return true;
};

const tree1node3 = new TreeNode(3);
const tree1node2 = new TreeNode(2);
const tree1node1 = new TreeNode(1, tree1node2, tree1node3);

const tree2node2 = new TreeNode(2);
const tree2node1 = new TreeNode(1, tree1node2, null);

const tree3node2 = new TreeNode(2);
const tree3node1 = new TreeNode(1, null, tree1node2);

console.log(isSameTree(tree2node1, tree3node1));
