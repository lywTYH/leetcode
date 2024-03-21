/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const dp: number[][] = [];
  dp[0] = [1];
  for (let i = 1; i < numRows; i++) {
    dp[i] = [1];
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
    dp[i].push(1);
  }
  return dp;
}
// @lc code=end
