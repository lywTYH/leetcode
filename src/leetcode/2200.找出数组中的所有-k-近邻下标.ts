/*
 * @lc app=leetcode.cn id=2200 lang=typescript
 *
 * [2200] 找出数组中的所有 K 近邻下标
 */

// @lc code=start
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const ans = [];
  for (let i = 0, j = 0; i < nums.length && j < nums.length; i++) {
    if (nums[i] == key) {
      j = Math.max(i - k, j);
      const right = Math.min(i + k, nums.length - 1);
      while (j <= right) {
        ans.push(j++);
      }
    }
  }
  return ans;
}
// @lc code=end
