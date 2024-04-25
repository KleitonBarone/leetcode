/*
https://leetcode.com/problems/maximum-depth-of-binary-tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2



Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

*/

//Definition for a binary tree node.
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
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    const maxDepthLeft = maxDepth(root.left);
    const maxDepthRight = maxDepth(root.right);

    if (maxDepthLeft > maxDepthRight) {
        return maxDepthLeft + 1;
    }

    return maxDepthRight + 1;
};

const node4 = new TreeNode(7);
const node3 = new TreeNode(15);
const node2 = new TreeNode(20, node3, node4);
const node1 = new TreeNode(9);
const head = new TreeNode(3, node1, node2);

console.log(maxDepth(head));
