/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const len = prices.length;
  if (len < 2) return 0;

  const dp = Array.from({ length: len }, () => Array(2).fill(0));
}
// @lc code=end
