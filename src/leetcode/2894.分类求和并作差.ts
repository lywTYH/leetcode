/*
 * @lc app=leetcode.cn id=2894 lang=typescript
 *
 * [2894] 分类求和并作差
 */

// @lc code=start
function differenceOfSums(n: number, m: number): number {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      sum2 += i;
    } else {
      sum1 += i;
    }
  }
  return sum1 - sum2;
}
// @lc code=end
