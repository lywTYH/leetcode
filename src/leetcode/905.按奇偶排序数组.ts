/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right--;
    }
  }
  return nums;
}
// @lc code=end
