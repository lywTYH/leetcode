/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let res = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + carry;
    res = (sum % 2) + res;
    carry = sum >= 2 ? 1 : 0;
    i--;
    j--;
  }
  return res;
}
// @lc code=end
