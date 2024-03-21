/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // let slow = 0,
  //   fast = 0;
  // do {
  //   slow = nums[slow];
  //   fast = nums[nums[fast]];
  // } while (slow !== fast);
  // slow = 0;
  // while (slow != fast) {
  //   slow = nums[slow];
  //   fast = nums[fast];
  // }
  // return slow;

  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }
    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
// @lc code=end
