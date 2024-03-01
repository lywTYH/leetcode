/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */
// @lc code=start
function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  const isPalindrome = (s: string, i: number, j: number): boolean => {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
}
// @lc code=end
