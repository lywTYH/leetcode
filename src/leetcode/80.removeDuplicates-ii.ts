/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const process = (k: number) => {
    let i = 0;
    for (const n of nums) {
      if (i < k || n > nums[i - k]) {
        nums[i++] = n;
      }
    }
    return i;
  };
  return process(2);
}
// @lc code=end
removeDuplicates([1, 1, 1, 2, 2, 2, 3]);
