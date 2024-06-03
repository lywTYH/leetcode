/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let ans: number[][] = [[]];
  nums.forEach((v) => {
    ans = [...ans, ...ans.map((_v) => [..._v, v])];
  });
  return ans;
}
// @lc code=end

console.log(subsets([1, 2, 3]));
