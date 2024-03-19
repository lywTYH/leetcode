/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */
// @lc code=start
const romanNumberDict: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
function romanToInt(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (['IX', 'IV', 'XL', 'XC', 'CD', 'CM'].includes(s.slice(i, i + 2))) {
      sum += romanNumberDict[s.slice(i, i + 2)];
      i++;
      continue;
    }
    sum += romanNumberDict[s[i]];
  }
  return sum;
}
// @lc code=end
