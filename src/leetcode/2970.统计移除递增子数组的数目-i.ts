/*
 * @lc app=leetcode.cn id=2970 lang=typescript
 *
 * [2970] 统计移除递增子数组的数目 I
 */

// @lc code=start
function incremovableSubarrayCount(nums: number[]): number {
  const n = nums.length;
  let i = 0;
  while (i < n - 1 && nums[i] < nums[i + 1]) {
    i++;
  }
  if (i == n - 1) {
    // 每个非空子数组都可以移除
    return (n * (n + 1)) / 2;
  }

  let ans = i + 2;
  for (let j = n - 1; j == n - 1 || nums[j] < nums[j + 1]; j--) {
    while (i >= 0 && nums[i] >= nums[j]) {
      i--;
    }
    ans += i + 2;
  }
  return ans;
}
// @lc code=end
