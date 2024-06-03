/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const swap = (left: number, right: number) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]) {
      swap(nums[i] - 1, i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  // 都正确则返回数组长度 + 1
  return nums.length + 1;
}
// @lc code=end
