/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const ans: number[] = new Array(nums.length).fill(0);
  for (let i = 0, j = nums.length - 1, pos = nums.length - 1; i <= j; ) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      ans[pos] = nums[i] * nums[i];
      ++i;
    } else {
      ans[pos] = nums[j] * nums[j];
      --j;
    }
    --pos;
  }
  return ans;
}
// @lc code=end
