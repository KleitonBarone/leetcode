/*
https://leetcode.com/problems/symmetric-tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false



Constraints:

    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100


Follow up: Could you solve it both recursively and iteratively?

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }

    const isMirror = (nodeLeft, nodeRight) => {
        if (nodeLeft === null && nodeRight === null) {
            return true;
        }
        if (nodeLeft === null || nodeRight === null) {
            return false;
        }

        const isMirrorOuter = isMirror(nodeLeft.left, nodeRight.right);
        const isMirrorInner = isMirror(nodeLeft.right, nodeRight.left);

        return nodeLeft.val === nodeRight.val && isMirrorOuter && isMirrorInner;
    };

    return isMirror(root.left, root.right);
};

const tree1node3 = new TreeNode(3);
const tree1node2 = new TreeNode(2);
const tree1node1 = new TreeNode(1, tree1node2, tree1node3);

console.log(isSymmetric(tree1node1));
