/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // nums.sort((a, b) => a - b);

  // return nums[Math.floor(nums.length / 2)];

  let count = 1;
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      current = nums[i];
    }
    count += current === nums[i] ? 1 : -1;
  }
  return current;
}
// @lc code=end
