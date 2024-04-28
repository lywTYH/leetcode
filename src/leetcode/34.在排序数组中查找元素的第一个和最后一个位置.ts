/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = -1;
  let right = -1;

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      left = mid;
      right = mid;
      while (nums[left] === target) {
        left--;
      }
      while (nums[right] === target) {
        right++;
      }
      left++;
      right--;
      break;
    } else {
      if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return [left, right];
}
// @lc code=end
