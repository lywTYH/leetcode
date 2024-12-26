/*
 * @lc app=leetcode.cn id=57 lang=typescript
 * @lcpr version=30204
 *
 * [57] 插入区间
 *
 * https://leetcode.cn/problems/insert-interval/description/
 *
 * algorithms
 * Medium (42.70%)
 * Likes:    939
 * Dislikes: 0
 * Total Accepted:    236.7K
 * Total Submissions: 554.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表 intervals，其中 intervals[i] = [starti, endi] 表示第 i
 * 个区间的开始和结束，并且 intervals 按照 starti 升序排列。同样给定一个区间 newInterval = [start, end]
 * 表示另一个区间的开始和结束。
 *
 * 在 intervals 中插入区间 newInterval，使得 intervals 依然按照 starti
 * 升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。
 *
 * 返回插入之后的 intervals。
 *
 * 注意 你不需要原地修改 intervals。你可以创建一个新数组然后返回它。
 *
 *
 *
 * 示例 1：
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 * 输入：intervals = [[1,2],[3,5],[4, 8],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^5
 * intervals 根据 starti 按 升序 排列
 * newInterval.length == 2
 * 0 <= start <= end <= 10^5
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res:number[][] = [];
  const len = intervals.length;
  let i = 0;

  while (i < len && intervals[i][1] < newInterval[0]) { // 当前遍历的是蓝左边的，不重叠的区间
    res.push(intervals[i]);
    i++;
  }
  while (i < len && intervals[i][0] <= newInterval[1]) { // 当前遍历是有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端
    i++;
  }
  res.push(newInterval);

  while (i < len) {
    res.push(intervals[i]);
    i++;
  }
  return res;
}
// @lc code=end

// * 输入：intervals = [[1,2],[3,5],[4, 8],[6,7],[8,10],[12,16]], newInterval = [4,8]
// * 输出：[[1,2],[3,10],[12,16]]
// * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
console.log(insert([[1, 5]], [0, 0]));
/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */
