/*
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a
height-balanced
binary search tree.



Example 1:

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.



Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in a strictly increasing order.



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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const len = nums.length;
    if (len === 0) {
        return null;
    }

    if (len === 1) {
        return new TreeNode(nums[0]);
    }

    const middle = Math.floor(len / 2);
    const left = sortedArrayToBST(nums.slice(0, middle));
    const right = sortedArrayToBST(nums.slice(middle + 1));

    const root = new TreeNode(nums[middle]);
    root.left = left;
    root.right = right;

    return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
