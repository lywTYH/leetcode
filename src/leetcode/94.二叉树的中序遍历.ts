/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: { visited: boolean; node: typeof root }[] = [{ visited: false, node: root }];
  while (stack.length > 0) {
    const popNode = stack.pop();
    if (popNode === undefined) continue;
    const { visited, node } = popNode;
    if (node === null) continue;
    if (visited) {
      res.push(node.val);
    } else {
      stack.push({ visited: false, node: node.right });
      stack.push({ visited: true, node });
      stack.push({ visited: false, node: node.left });
    }
  }
  return res;
}
// @lc code=end
