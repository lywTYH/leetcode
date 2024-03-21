/*
 * @lc app=leetcode.cn id=3038 lang=typescript
 *
 * [3038] 相同分数的最大操作数目 I
 */

// @lc code=start
function maxOperations(nums: number[]): number {
  let count = 1;
  const sum = nums[0] + nums[1];
  for (let i = 2; i < nums.length; i += 2) {
    if (i + 1 >= nums.length) {
      break;
    }
    if (nums[i] + nums[i + 1] !== sum) {
      break;
    }
    count++;
  }
  return count;
}
// @lc code=end
