/*
https://leetcode.com/problems/minimum-absolute-difference-in-bst

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.



Example 1:

Input: root = [4,2,6,1,3]
Output: 1

Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1



Constraints:

    The number of nodes in the tree is in the range [2, 104].
    0 <= Node.val <= 105



Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/


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
var getMinimumDifference = function (root) {
    let diff = Infinity;
    let prev = null;

    const depthFirstSearch = (root) => {
        if (!(root.left === null)) {
            depthFirstSearch(root.left);
        }

        if (prev) {
            diff = Math.min(diff, Math.abs(prev.val - root.val));
        }

        prev = root;

        if (!(root.right === null)) {
            depthFirstSearch(root.right);
        }
    };

    depthFirstSearch(root);
    return diff;
};

const tree1node3 = new TreeNode(3);
const tree1node2 = new TreeNode(2);
const tree1node1 = new TreeNode(1, tree1node2, tree1node3);

const tree2node2 = new TreeNode(2);
const tree2node1 = new TreeNode(1, null, tree2node2);

console.log(getMinimumDifference(tree2node1));
