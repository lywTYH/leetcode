/*
 * @lc app=leetcode.cn id=645 lang=typescript
 * @lcpr version=30204
 *
 * [645] 错误的集合
 *
 * https://leetcode.cn/problems/set-mismatch/description/
 *
 * algorithms
 * Easy (39.06%)
 * Likes:    372
 * Dislikes: 0
 * Total Accepted:    122.6K
 * Total Submissions: 314K
 * Testcase Example:  '[1,2,2,4]'
 * 1 +2 +3 = 6
 * 1+ 3+ 3 = 7
 * x =6;
 * x - a + b =7
 * c + a = 6
 * c + b = 7
 * b -a = 1
 *
 * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且
 * 有一个数字重复 。
 *
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。
 *
 * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,2,4]
 * 输出：[2,3]
 *
 *
 * 示例 2：
 *
 * 输入：nums = [1,1]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^4
 *
 *
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findErrorNums(nums: number[]): number[] {
  const s = new Set<number>(nums);
  const sum_nums = nums.reduce((acc, cur) => acc + cur, 0);
  const sum_s = Array.from(s).reduce((acc, cur) => acc + cur, 0);
  const a = sum_nums - sum_s;
  const b = (1 + nums.length) * nums.length / 2 - sum_s;
  return [a, b];
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

