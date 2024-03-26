/*
 * @lc app=leetcode.cn id=1304 lang=typescript
 *
 * [1304] 和为零的 N 个不同整数
 */

// @lc code=start
function sumZero(n: number): number[] {
  const ans = new Array(n).fill(0).map((_, index) => {
    return index % 2 === 0 ? +(index + 1) : -index;
  });
  if (n % 2 === 1) {
    ans[ans.length - 1] = 0;
  }
  return ans;
}
// @lc code=end
