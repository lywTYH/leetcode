/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i] === '') return '';
    let j = 0;
    while (j < prefix.length && j < strs[i].length) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === '') {
      return prefix;
    }
  }
  return prefix;
}
// @lc code=end
