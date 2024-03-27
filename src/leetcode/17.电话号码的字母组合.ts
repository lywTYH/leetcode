/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'] as const;
  if (!digits) return [];
  let ans: string[] = [];
  for (let i = 0; i < digits.length; i++) {
    const letters = letterMap[Number(digits[i])].split('');
    if (ans.length === 0) {
      ans.push(...letters);
    } else {
      ans = ans.reduce((pre, cur) => {
        return pre.concat(letters.map((l) => cur + l));
      }, [] as string[]);
    }
  }
  return ans;
}
// @lc code=end
