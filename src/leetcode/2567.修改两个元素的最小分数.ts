/*
 * @lc app=leetcode.cn id=2567 lang=typescript
 *
 * [2567] 修改两个元素的最小分数
 */

// @lc code=start
function minimizeSum(nums: number[]): number {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.min(nums[n - 3] - nums[0], nums[n - 1] - nums[2], nums[n - 2] - nums[1]);
}
// @lc code=end
