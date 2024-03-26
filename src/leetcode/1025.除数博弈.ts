/*
 * @lc app=leetcode.cn id=1025 lang=typescript
 *
 * [1025] 除数博弈
 */

// @lc code=start
function divisorGame(n: number): boolean {
  if (n == 1) return false;
  if (n == 2) return true;
  const dp = new Array(n + 1).fill(false);
  dp[1] = false;
  dp[2] = true;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j == 0 && !dp[i - j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
// @lc code=end
