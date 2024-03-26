/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let xParent: number = 0;
  let xDepth: number = 0;
  let xFound: boolean = false;

  let yParent: number = 0;
  let yDepth: number = 0;
  let yFound: boolean = false;

  function dfs(node: TreeNode | null, depth: number, parent: number) {
    if (!node) {
      return;
    }
    if (node.val === x) {
      [xParent, xDepth, xFound] = [parent, depth, true];
    }
    if (node.val === y) {
      [yParent, yDepth, yFound] = [parent, depth, true];
    }
    if (xFound && yFound) {
      return;
    }
    dfs(node.left, depth + 1, node.val);
    if (xFound && yFound) {
      return;
    }
    dfs(node.right, depth + 1, node.val);
  }
  dfs(root, 0, 0);
  return xDepth === yDepth && xParent !== yParent;
}
// @lc code=end
