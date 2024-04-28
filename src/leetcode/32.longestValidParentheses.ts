/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  const dp = new Array(s.length).fill(0);
  dp[0] = 0;
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== ')') {
      continue;
    }
    if (s[i - 1] === '(') {
      dp[i] = (dp[i - 2] || 0) + 2;
    } else {
      if (s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2;
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}
// @lc code=end
longestValidParentheses('(()');
// s[i] = '(' dp[i] = dp[i-1];
// s[i] = ')' && s[i-1]='(' dp[i]= dp[i-2]+2;
// s[i] = ')' && s[i-1]=')' && s[i-dp[i-1]-1]='(' dp[i] = dp[i-1]+dp[i-dp[i-1]-2]+2;
