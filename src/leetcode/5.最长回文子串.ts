/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  let start = 0;
  let end = 0;
  let maxLen = 0;

  function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}
// @lc code=end
