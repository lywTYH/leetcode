/*
 * @lc app=leetcode.cn id=46 lang=typescript
 * @lcpr version=30204
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (79.78%)
 * Likes:    2986
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }
  const res: number[][] = [];
  // for (let i = 0; i < nums.length; i++) {
  //   const rest = nums.slice(0, i).concat(nums.slice(i + 1));
  //   const restRes = permute(rest);
  //   for (let j = 0; j < restRes.length; j++) {
  //     res.push([nums[i], ...restRes[j]]);
  //   }
  // }
  // return res;
  const dfs = (_nums: number[], path: number[]) => {
    if (path.length === _nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < _nums.length; i++) {
      if (path.includes(_nums[i])) {
        continue;
      }
      path.push(_nums[i]);
      dfs(_nums, path);
      path.pop();
    }
  };
  dfs(nums, []);
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
const res = permute([1, 2, 3]); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(res);
