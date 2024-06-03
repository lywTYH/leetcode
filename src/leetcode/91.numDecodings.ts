/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
  const dp = [1, 0, 0];
  for (let i = 0; i < s.length; i++) {
    const a = parseInt(s[i]);
    const b = parseInt(s[i - 1]) * 10 + a;
    const index = (i + 1) % 3;
    dp[index] = 0;
    if (a >= 1 && a <= 9) {
      dp[index] += dp[i % 3];
    }
    if (b >= 10 && b <= 26) {
      dp[index] += dp[(i - 1) % 3];
    }
  }
  return dp[s.length % 3];
}
// @lc code=end
numDecodings('226');
// 26
