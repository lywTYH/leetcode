/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  const version1Arr = version1.split('.');
  const version2Arr = version2.split('.');

  const len = Math.max(version1Arr.length, version2Arr.length);
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(version1Arr[i] || '0');
    const num2 = parseInt(version2Arr[i] || '0');
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
// @lc code=end
