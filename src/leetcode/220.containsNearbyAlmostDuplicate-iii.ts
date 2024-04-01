/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
const getID = (value: number, w: number) => {
  return value < 0 ? Math.floor((value + 1) / w) - 1 : Math.floor(value / w);
};
function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  const bucket = valueDiff + 1;
  const bucketMap: Record<number, number> = {};
  const getBucketId = (v: number) => {
    return Math.floor(v / bucket);
  };
  for (let i = 0; i < nums.length; ++i) {
    const bucketId = getBucketId(nums[i]);
    if (bucketMap[bucketId] !== undefined) {
      return true;
    }
    const right = bucketMap[bucketId + 1];
    if (right !== undefined && Math.abs(right - nums[i]) <= valueDiff) {
      return true;
    }
    const left = bucketMap[bucketId - 1];
    if (left !== undefined && Math.abs(left - nums[i]) <= valueDiff) {
      return true;
    }
    bucketMap[bucketId] = nums[i];
    if (i >= indexDiff) {
      delete bucketMap[getBucketId(nums[i - indexDiff])];
    }
  }
  return false;
}
// @lc code=end
