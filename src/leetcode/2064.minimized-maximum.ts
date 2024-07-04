/*
 * @lc app=leetcode.cn id=2064 lang=typescript
 *
 * [2064] 分配给商店的最多商品的最小值
 */
// @lc code=start
function minimizedMaximum(n: number, quantities: number[]): number {
  const len = quantities.length;
  const maxNum = Math.max(...quantities);
  if (len === 1 || len === n) return maxNum;

  const check = (num: number) => {
    let count = 0;
    for (let i = 0; i < len; i++) {
      count += Math.ceil(quantities[i] / num);
    }
    return count <= n;
  };
  let [left, right] = [1, maxNum];

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
// @lc code=end
