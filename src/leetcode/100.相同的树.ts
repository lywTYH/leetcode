/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = [p, q];
  while (queue.length) {
    const p1 = queue.shift();
    const q1 = queue.shift();
    if (p1 === null && q1 === null) {
      continue;
    }
    if (p1 === null || q1 === null) {
      return false;
    }
    if (p1.val !== q1.val) {
      return false;
    }
    queue.push(p1.left, q1.left);
    queue.push(p1.right, q1.right);
  }
  return true;
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// @lc code=end
