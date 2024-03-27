/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const n = s.length;
  if (numRows === 1 || numRows >= n) {
    return s;
  }
  const t = (numRows - 1) * 2;
  const ans = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < n - i; j += t) {
      ans.push(s[j + i]);
      if (0 < i && i < numRows - 1 && j + t - i < n) {
        ans.push(s[j + t - i]);
      }
    }
  }
  return ans.join('');
}
// @lc code=end
