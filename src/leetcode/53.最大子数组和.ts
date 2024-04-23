/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let pre = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = pre > 0 ? pre + nums[i] : nums[i];
    max = Math.max(max, pre);
  }
  return max;
}
// @lc code=end
