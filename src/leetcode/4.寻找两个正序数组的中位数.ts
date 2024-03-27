/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const len = m + n;
  let left = -1,
    right = -1;
  let aStart = 0,
    bStart = 0;
  for (let i = 0; i <= len / 2; i++) {
    left = right;
    if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
      right = nums1[aStart++];
    } else {
      right = nums2[bStart++];
    }
  }
  if ((len & 1) == 0) {
    return (left + right) / 2;
  }
  return right;
}
// @lc code=end
