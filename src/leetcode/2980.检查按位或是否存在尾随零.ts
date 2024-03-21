/*
 * @lc app=leetcode.cn id=2980 lang=typescript
 *
 * [2980] 检查按位或是否存在尾随零
 */

// @lc code=start
function hasTrailingZeros(nums: number[]): boolean {
  let hasTrailingZerosCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      hasTrailingZerosCount++;
    }
    if (hasTrailingZerosCount > 1) {
      break;
    }
  }
  return hasTrailingZerosCount > 1;
}
// @lc code=end
