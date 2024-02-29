/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const tmpMap = new Map();
  for (let i = 0; i <= nums.length; i++) {
    const tmp = target - nums[i];
    if (tmpMap.has(tmp)) {
      return [tmpMap.get(tmp), i];
    } else {
      tmpMap.set(nums[i], i);
    }
  }
  return [];
}
// @lc code=end
