/*
 * @lc app=leetcode.cn id=2965 lang=typescript
 *
 * [2965] 找出缺失和重复的数字
 */

// @lc code=start
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const flatArray = grid.reduce((acc, cur) => acc.concat(cur), []);
  const uniqueSum = Array.from(new Set(flatArray)).reduce((acc, cur) => acc + cur, 0);
  const sum = flatArray.reduce((acc, cur) => acc + cur, 0);
  const repeat = sum - uniqueSum;
  const missing = ((1 + grid.length * grid.length) * grid.length * grid.length) / 2 - uniqueSum;
  return [repeat, missing];
}
// @lc code=end
