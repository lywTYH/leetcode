/*
 * @lc app=leetcode.cn id=2996 lang=typescript
 *
 * [2996] 大于等于顺序前缀和的最小缺失整数
 */

// @lc code=start
function missingInteger(nums: number[]): number {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[0] + i) {
      break;
    }
    max += nums[i];
  }
  const set = new Set(nums);
  while (set.has(max)) {
    max++;
  }
  return max;
}
// @lc code=end
