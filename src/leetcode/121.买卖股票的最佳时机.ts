/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */
// @lc code=start
function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (n < 1) {
    return 0;
  }
  let min = prices[0];
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (min > prices[i]) {
      min = prices[i];
    }
    res = Math.max(res, prices[i] - min);
  }
  return res;

  // let dp0 = 0;
  // let dp1 = -prices[0];
  // for (let i = 1; i < n; ++i) {
  //   dp0 = Math.max(dp0, dp1 + prices[i]);
  //   dp1 = Math.max(dp1, -prices[i]);
  // }
  // return dp0;
}
// @lc code=end
