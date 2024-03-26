/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  let max = nums[0];
  let index = 0;
  let sec_max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    // const element = array[i];
    if (nums[i] > max) {
      sec_max = max;
      max = nums[i];
      index = i;
    } else {
      if (nums[i] > sec_max) {
        sec_max = nums[i];
      }
    }
  }
  return max >= sec_max * 2 ? index : -1;
}
// @lc code=end
