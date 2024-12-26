/*
 * @lc app=leetcode.cn id=2765 lang=typescript
 * @lcpr version=30204
 *
 * [2765] 最长交替子数组
 *
 * https://leetcode.cn/problems/longest-alternating-subarray/description/
 *
 * algorithms
 * Easy (50.05%)
 * Likes:    62
 * Dislikes: 0
 * Total Accepted:    26.4K
 * Total Submissions: 52.7K
 * Testcase Example:  '[2,3,4,3,4]'
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果 nums 中长度为 m 的子数组 s 满足以下条件，我们称它是一个 交替子数组 ：
 *
 *
 * m 大于 1 。
 * s1 = s0 + 1 。
 * 下标从 0 开始的子数组 s 与数组 [s0, s1, s0, s1,...,s(m-1) % 2] 一样。也就是说，s1 - s0 = 1 ，s2 -
 * s1 = -1 ，s3 - s2 = 1 ，s4 - s3 = -1 ，以此类推，直到 s[m - 1] - s[m - 2] = (-1)^m 。
 *
 *
 * 请你返回 nums 中所有 交替 子数组中，最长的长度，如果不存在交替子数组，请你返回 -1 。
 *
 * 子数组是一个数组中一段连续 非空 的元素序列。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [2,3,4,3,4]
 *
 * 输出：4
 *
 * 解释：交替子数组有 [2,3]，[3,4]，[3,4,3] 和 [3,4,3,4]。最长的子数组为 [3,4,3,4]，长度为 4。
 *
 *
 *
 * 示例 2：
 *
 * 输入：nums = [4,5,6]
 *
 * 输出：2
 *
 * 解释：[4,5] 和 [5,6] 是仅有的两个交替子数组。它们长度都为 2 。
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 100
 * 1 <= nums[i] <= 10^4
 *
 *
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function alternatingSubarray(nums: number[]): number {

};
// @lc code=end



/*
// @lcpr case=start
// [2,3,4,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6]\n
// @lcpr case=end

 */
