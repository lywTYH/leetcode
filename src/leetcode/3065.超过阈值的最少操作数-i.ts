/*
 * @lc app=leetcode.cn id=3065 lang=typescript
 *
 * [3065] 超过阈值的最少操作数 I
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
  return nums.filter((v) => v < k).length;
}
// @lc code=end
