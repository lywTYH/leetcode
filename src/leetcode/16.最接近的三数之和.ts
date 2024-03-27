/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  if (nums[0] + nums[1] + nums[2] >= target) {
    return nums[0] + nums[1] + nums[2];
  }
  if (nums[n - 3] + nums[n - 2] + nums[n - 1] <= target) {
    return nums[n - 3] + nums[n - 2] + nums[n - 1];
  }

  let near = Number.MAX_SAFE_INTEGER;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1, k = n - 1; j < k; ) {
      const sum = nums[i] + nums[j] + nums[k];
      const diffABS = Math.abs(target - sum);
      if (near > diffABS) {
        near = diffABS;
        ans = sum;
      }
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        return sum;
      }
    }
  }
  return ans;
}
// @lc code=end
