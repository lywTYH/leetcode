/*
 * @lc app=leetcode.cn id=198 lang=typescript
 * @lcpr version=30204
 *
 * [198] 打家劫舍
 *
 * https://leetcode.cn/problems/house-robber/description/
 *
 * algorithms
 * Medium (55.43%)
 * Likes:    3106
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2M
 * Testcase Example:  '[1,2,3,1]'
 *
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2：
 *
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function rob(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  // const dp: number[] = new Array(nums.length).fill(0);
  // dp[0] = 0;
  // dp[1] = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  // }
  // return dp[nums.length];
  let pre = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = curr;
    curr = Math.max(pre + nums[i], curr)
    pre = temp;
  }
  return curr;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,1,3,0]\n
// @lcpr case=end

 */
