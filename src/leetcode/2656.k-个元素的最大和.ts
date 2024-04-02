/*
 * @lc app=leetcode.cn id=2656 lang=typescript
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
function maximizeSum(nums: number[], k: number): number {
  let max = 0;
  nums.forEach((v) => {
    max = Math.max(v, max);
  });

  return ((max + k + max - 1) / 2) * k;
}
// @lc code=end
maximizeSum([1, 2, 3, 4, 5], 3);
// 5 6 7

// (5 + 3 -1 + 5 )/2 * 3
