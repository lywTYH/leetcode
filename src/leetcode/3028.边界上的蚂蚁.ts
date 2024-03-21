/*
 * @lc app=leetcode.cn id=3028 lang=typescript
 *
 * [3028] 边界上的蚂蚁
 */

// @lc code=start
function returnToBoundaryCount(nums: number[]): number {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0) {
      count++;
    }
  }
  return count;
}
// @lc code=end
