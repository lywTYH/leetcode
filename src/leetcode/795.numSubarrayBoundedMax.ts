/*
 * @lc app=leetcode.cn id=795 lang=typescript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  let ans = 0;
  let last1 = -1;
  let last2 = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i;
    } else if (nums[i] > right) {
      last2 = i;
      last1 = -1;
    }
    if (last1 !== -1) {
      ans += last1 - last2;
    }
  }
  return ans;
}
// @lc code=end
numSubarrayBoundedMax([2, 1, 4, 3], 2, 3);
