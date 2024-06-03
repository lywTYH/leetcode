/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  const recur = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }
    const left = recur(root.left);
    if (left === -1) {
      return -1;
    }
    const right = recur(root.right);
    if (right === -1) {
      return -1;
    }
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
  };

  return recur(root) !== -1;
}
// @lc code=end
