/*
https://leetcode.com/problems/count-complete-tree-nodes

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.



Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1



Constraints:

    The number of nodes in the tree is in the range [0, 5 * 104].
    0 <= Node.val <= 5 * 104
    The tree is guaranteed to be complete.



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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (root === null) {
        return 0;
    }

    const countLeft = countNodes(root.left);
    const countRight = countNodes(root.right);

    return countLeft + countRight + 1;
};

const tree1node3 = new TreeNode(3);
const tree1node2 = new TreeNode(2);
const tree1node1 = new TreeNode(1, tree1node2, tree1node3);

console.log(countNodes(tree1node1));
