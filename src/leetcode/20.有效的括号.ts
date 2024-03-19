/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length < 2) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if ('([{'.indexOf(s[i]) > -1) {
      stack.push(s[i]);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    const top = stack.pop();
    if ('()[]{}'.indexOf(`${top}${s[i]}`) < 0) {
      return false;
    }
  }
  return stack.length === 0;
}
// @lc code=end
