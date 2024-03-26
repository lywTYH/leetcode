/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  const sLen = s.length,
    tLen = t.length;
  if (sLen > tLen) return false;
  if (sLen == 0) return true;
  const dp = new Array(sLen + 1).fill(0).map(() => new Array(tLen + 1).fill(0).map(() => false));
  for (let i = 0; i <= tLen; i++) {
    dp[0][i] = true;
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] == t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[sLen][tLen];
}
// @lc code=end
