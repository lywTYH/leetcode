/*
 * @lc app=leetcode.cn id=56 lang=typescript
 * @lcpr version=30204
 *
 * [56] 合并区间
 *
 * https://leetcode.cn/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (50.65%)
 * Likes:    2456
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 2M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [sortedIntervals[0]];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const current = sortedIntervals[i];
    const last = res[res.length - 1];
    if (last[1] < current[0]) {
      res.push(current);
    } else {
      last[1] = Math.max(last[1], current[1]);
    }
  }
  return res;
}
// @lc code=end

merge([
  [2, 6],
  [1, 3],
  [8, 10],
  [15, 18],
]);

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */
