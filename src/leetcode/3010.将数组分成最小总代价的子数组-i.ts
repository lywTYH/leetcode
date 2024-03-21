/*
 * @lc app=leetcode.cn id=3010 lang=typescript
 *
 * [3010] 将数组分成最小总代价的子数组 I
 */

// @lc code=start
function minimumCost(nums: number[]): number {
  let minSum = nums[1] + nums[2];
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      minSum = Math.min(minSum, nums[i] + nums[j]);
    }
  }
  return nums[0] + minSum;
}
// @lc code=end
