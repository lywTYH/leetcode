/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i % 2 === 0 ? dp[i / 2] : dp[i - 1] + 1;
  }
  return dp;
}
// @lc code=end
