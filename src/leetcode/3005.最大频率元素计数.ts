/*
 * @lc app=leetcode.cn id=3005 lang=typescript
 *
 * [3005] 最大频率元素计数
 */

// @lc code=start
function maxFrequencyElements(nums: number[]): number {
  const record = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const count = record.get(nums[i]) || 0;
    record.set(nums[i], count + 1);
  }
  const recordValues = Array.from(record.values()).sort((a, b) => b - a);
  let max = recordValues[0];
  for (let i = 1; i < recordValues.length; i++) {
    if (recordValues[i] === recordValues[i - 1]) {
      max += recordValues[i];
    } else {
      break;
    }
  }
  return max;
}
// @lc code=end
