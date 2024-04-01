/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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
function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  // const dfs = (node: TreeNode | null, depth: number) => {
  //   if (node == null) return;
  //   if (depth == ans.length) {
  //     ans.push(node.val);
  //   }
  //   dfs(node.right, depth + 1);
  //   dfs(node.left, depth + 1);
  // };
  // dfs(root, 0);
  if (!root) return ans;
  let queue = [root];
  while (queue.length > 0) {
    const node = queue[queue.length - 1];
    ans.push(node.val);
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) nextQueue.push(queue[i].left);
      if (queue[i].right) nextQueue.push(queue[i].right);
    }
    queue = nextQueue;
  }
  return ans;
}
// @lc code=end
