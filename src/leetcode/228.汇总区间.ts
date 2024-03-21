/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const range: string[] = [];
  let i = 0;
  while (i < nums.length) {
    const start = i;
    i++;
    while (i < nums.length && nums[i] - nums[i - 1] === 1) {
      i++;
    }
    if (start !== i - 1) {
      range.push(`${nums[start]}->${nums[i - 1]}`);
    } else {
      range.push(`${nums[start]}`);
    }
  }
  return range;
}
// @lc code=end
