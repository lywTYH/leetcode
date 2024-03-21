/*
 * @lc app=leetcode.cn id=2974 lang=typescript
 *
 * [2974] 最小数字游戏
 */

// @lc code=start
function numberGame(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const arr: number[] = [];
  while (nums.length) {
    arr.push(nums[1], nums[0]);
    nums.shift();
    nums.shift();
  }
  return arr;
}
// @lc code=end
