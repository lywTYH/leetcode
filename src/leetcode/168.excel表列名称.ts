/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  const ntc = [
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
  ];
  let res = '';
  while (columnNumber > 0) {
    const char = ntc[columnNumber % 26];
    res = char + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
}
// @lc code=end
