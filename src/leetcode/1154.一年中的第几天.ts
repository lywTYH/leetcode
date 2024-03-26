/*
 * @lc app=leetcode.cn id=1154 lang=typescript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
function dayOfYear(date: string): number {
  const [year, month, day] = date.split('-').map(Number);
  const isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  const days = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days.slice(0, month - 1).reduce((acc, cur) => acc + cur, 0) + day;
}
// @lc code=end
