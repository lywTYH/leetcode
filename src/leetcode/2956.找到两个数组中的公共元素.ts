/*
 * @lc app=leetcode.cn id=2956 lang=typescript
 *
 * [2956] 找到两个数组中的公共元素
 */

// @lc code=start
function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res: number[] = [0, 0];
  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      res[0]++;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      res[1]++;
    }
  }
  return res;
}
// @lc code=end
