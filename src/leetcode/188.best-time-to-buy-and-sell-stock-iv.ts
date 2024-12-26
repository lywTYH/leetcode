/*
 * @lc app=leetcode.cn id=188 lang=typescript
 * @lcpr version=30204
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (51.27%)
 * Likes:    1219
 * Dislikes: 0
 * Total Accepted:    289.6K
 * Total Submissions: 564.4K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
 *
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 *
 * 示例 2：
 *
 * 输入：k = 2, prices = [3,2,6,5,0,3]
 * 输出：7
 * 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
 * ⁠    随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 =
 * 3 。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= 100
 * 1 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  if (!prices.length) {
    return 0;
  }
  const n = prices.length;
  k = Math.min(k, Math.floor(n / 2));

  const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  buy[0][0] = -prices[0];
  sell[0][0] = 0;
  for (let i = 1; i <= n; ++i) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }
  for (let i = 1; i < n; ++i) {
    buy[i][0]= Math.max(buy[i-1][0],sell[i-1][0]-prices[i]);
    for (let j = 1; j <= k; ++j) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
    }
  }
  return Math.max(...sell[n - 1]);
}
// @lc code=end

/*
// @lcpr case=start
// 2\n[2,4,1]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[3,2,6,5,0,3]\n
// @lcpr case=end

 */
maxProfit(2, [3, 2, 6, 5, 0, 3]);
