// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  } else if (root.left) {
    return minDepth(root.left) + 1;
  } else if (root.right) {
    return minDepth(root.right) + 1;
  } else {
    return 1;
  }
};
