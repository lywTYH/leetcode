/*
 * @lc app=leetcode.cn id=42 lang=typescript
 * @lcpr version=30204
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (64.36%)
 * Likes:    5360
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.7M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
// [2, 1, 0, 1, 3]
function trap(height: number[]): number {
  const n = height.length;
  if (n == 0) {
    return 0;
  }
  const leftMax = new Array(n).fill(height[0]);
  const rightMax = new Array(n).fill(height[n - 1]);
  for (let i = 0; i < n; ++i) {
    if (i > 0) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
      rightMax[n - 1 - i] = Math.max(rightMax[n - i], height[n - 1 - i]);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;

  // let ans: number = 0;
  // const stack: number[] = [];
  // const n = height.length;
  // for (let index = 0; index < n; index++) {
  //   while (stack.length && height[index] > height[stack[stack.length - 1]]) {
  //     const top = stack.pop()!;
  //     if (!stack.length) {
  //       break;
  //     }
  //     const left = stack[stack.length - 1];
  //     const width = index - left - 1;
  //     const h = Math.min(height[left], height[index]) - height[top];
  //     ans += width * h;
  //   }
  //   stack.push(index);
  // }
  // return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,0,2,1,0,1,3,2,1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,0,3,2,5]\n
// @lcpr case=end

 */
// 0, 2, 1, 0, 1, 3, 2, 1, 2, 1
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
