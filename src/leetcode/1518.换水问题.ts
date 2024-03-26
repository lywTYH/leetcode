/*
 * @lc app=leetcode.cn id=1518 lang=typescript
 *
 * [1518] 换水问题
 */
// @lc code=start
function numWaterBottles(n: number, m: number): number {
  // let ans = numBottles;
  // while (numBottles >= numExchange) {
  //   const emptyBottles = numBottles % numExchange;
  //   const changedBottles = Math.floor(numBottles / numExchange);
  //   ans += changedBottles;
  //   numBottles = changedBottles + emptyBottles;
  // }
  // return ans;
  const cnt = Math.floor(n / (m - 1));
  return n % (m - 1) === 0 ? n + cnt - 1 : n + cnt;
}
// @lc code=end
