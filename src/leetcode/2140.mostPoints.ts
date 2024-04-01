/*
 * @lc app=leetcode.cn id=2140 lang=typescript
 *
 * [2140] 解决智力问题
 */
/**
 * no  d[i] = d[i+1];
 * yes d[i] = points[i]+dp[i+brainpower[i]+1].
 *
 */
// @lc code=start
function mostPoints(questions: number[][]): number {
  const dp = new Array(questions.length + 1).fill(0);

  let i = questions.length - 1;

  while (i >= 0) {
    dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + questions[i][1] + 1] || 0));
    i--;
  }
  return dp[0];
}
// @lc code=end
//
mostPoints([
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
]);
