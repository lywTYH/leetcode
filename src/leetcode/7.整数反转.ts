/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  if (x === 0) return 0;
  const limit = Math.pow(2, 31);
  let isNegative = false;
  if (x < 0) {
    x = -x;
    isNegative = true;
  }
  let ans = 0;
  while (x > 0) {
    ans = ans * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (isNegative && ans > limit) {
    return 0;
  }
  if (!isNegative && ans > limit - 1) {
    return 0;
  }
  return isNegative ? -ans : ans;

  // const ans = Number(Math.abs(x).toString().split('').reverse().join(''));
  //
  // if (!isNegative && Math.abs(ans) > limit) {
  //   return 0;
  // }
  // if (isNegative && ans > limit - 1) {
  //   return 0;
  // }
  // return isNegative ? -ans : ans;
}
// @lc code=end
