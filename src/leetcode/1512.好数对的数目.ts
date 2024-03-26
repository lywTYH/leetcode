/*
 * @lc app=leetcode.cn id=1512 lang=typescript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  const temp = new Array(101).fill(0);
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]] === 0) {
      temp[nums[i]] = 1;
    } else {
      temp[nums[i]]++;
      ans = ans + temp[nums[i]] - 1;
    }
  }
  return ans;
}
// @lc code=end
