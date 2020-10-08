/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(str: string): number {
  const previousIndexForChar = new Map<string, number>();
  let maxLength = 0;
  let startIndex = 0;

  for (let index = 0; index < str.length; index++) {
    const tmpChar = str[index];
    const lastTimeSeen = previousIndexForChar.get(tmpChar);
    if (lastTimeSeen === undefined || lastTimeSeen < startIndex) {
      maxLength = Math.max(maxLength, index - startIndex + 1);
    } else {
      startIndex = lastTimeSeen + 1;
    }
    previousIndexForChar.set(tmpChar, index);
  }
  return maxLength;
}
// @lc code=end

export default lengthOfLongestSubstring;
