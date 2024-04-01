/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  // const n = nums.length;
  // const dp: number[] = new Array(n).fill(0);
  // dp[0] = 0;
  // dp[1] = nums[0];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2]);
  // }
  // return dp[n];
  let pre = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = Math.max(cur, pre + nums[i]);
    pre = cur;
    cur = temp;
  }
  return cur;
}
// @lc code=end
