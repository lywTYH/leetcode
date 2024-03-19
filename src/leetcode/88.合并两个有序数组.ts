/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  const tmp = [...nums1];
  while (i < m && j < n) {
    if (tmp[i] > nums2[j]) {
      nums1[i + j] = nums2[j];
      j++;
    } else {
      nums1[i + j] = tmp[i];
      i++;
    }
  }
  while (i < m) {
    nums1[i + j] = tmp[i];
    i++;
  }
  while (j < n) {
    nums1[i + j] = nums2[j];
    j++;
  }
}
// @lc code=end
