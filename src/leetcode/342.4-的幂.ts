/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n <= 0 || (n & (n - 1)) !== 0) return false;
  while (n > 1) {
    n >>= 2;
  }
  return n === 1;
}
