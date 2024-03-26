/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], s: string): number[] {
  let rows = 1;
  let lastWidth = 0;
  for (let i = 0; i < s.length; i++) {
    const charWidth = widths[s.charCodeAt(i) - 97];
    if (lastWidth + charWidth > 100) {
      rows++;
      lastWidth = charWidth;
    } else {
      lastWidth += charWidth;
    }
  }
  return [rows, lastWidth];
}
// @lc code=end
