/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (i + needle.length > haystack.length) return -1;
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}
// @lc code=end
