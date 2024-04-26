/*
https://leetcode.com/problems/invert-binary-tree

Given the root of a binary tree, invert the tree, and return its root.



Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []



Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100



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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) {
        return root;
    }

    if (root.left === null && root.right === null) {
        return root;
    }

    const invertTreeRight = invertTree(root.right);
    const invertTreeLeft = invertTree(root.left);

    root.left = invertTreeRight;
    root.right = invertTreeLeft;

    return root;
};

const tree1node3 = new TreeNode(3);
const tree1node2 = new TreeNode(2);
const tree1node1 = new TreeNode(1, tree1node2, tree1node3);

const tree2node2 = new TreeNode(2);
const tree2node1 = new TreeNode(1, null, tree2node2);

console.log(invertTree(tree2node1));
