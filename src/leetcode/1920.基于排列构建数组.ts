/*
 * @lc app=leetcode.cn id=1920 lang=typescript
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  return nums.map((v, i) => {
    return nums[nums[i]];
  });
}
// @lc code=end
