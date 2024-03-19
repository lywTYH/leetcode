/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0) return 0;
  if (x < 4) {
    return 1;
  }
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = mid * mid;
    if (res <= x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
// @lc code=end
