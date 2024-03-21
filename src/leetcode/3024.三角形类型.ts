/*
 * @lc app=leetcode.cn id=3024 lang=typescript
 *
 * [3024] 三角形类型
 */

// @lc code=start
function triangleType(nums: number[]): string {
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[0] + nums[2] <= nums[1] ||
    nums[1] + nums[2] <= nums[0]
  ) {
    return 'none';
  }

  if (nums[0] === nums[1] && nums[1] === nums[2]) {
    return 'equilateral';
  }
  if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
    return 'isosceles';
  }
  return 'scalene';
}
// @lc code=end
