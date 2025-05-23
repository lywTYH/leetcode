/*
 * @lc app=leetcode.cn id=464 lang=typescript
 * @lcpr version=30203
 *
 * [464] 我能赢吗
 *
 * https://leetcode.cn/problems/can-i-win/description/
 *
 * algorithms
 * Medium (40.70%)
 * Likes:    548
 * Dislikes: 0
 * Total Accepted:    42.1K
 * Total Submissions: 103.4K
 * Testcase Example:  '10\n11'
 *
 * 在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过  100
 * 的玩家，即为胜者。
 *
 * 如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？
 *
 * 例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。
 *
 * 给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家能稳赢则返回
 * true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：maxChoosableInteger = 10, desiredTotal = 11
 * 输出：false
 * 解释：
 * 无论第一个玩家选择哪个整数，他都会失败。
 * 第一个玩家可以选择从 1 到 10 的整数。
 * 如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
 * 第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
 * 同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。
 *
 *
 * 示例 2:
 *
 * 输入：maxChoosableInteger = 10, desiredTotal = 0
 * 输出：true
 *
 *
 * 示例 3:
 *
 * 输入：maxChoosableInteger = 10, desiredTotal = 1
 * 输出：true
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= maxChoosableInteger <= 20
 * 0 <= desiredTotal <= 300
 *
 *
 */

// @lc code=start
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  if (maxChoosableInteger >= desiredTotal) return true;
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal) return false;

  const dp: Map<string, boolean> = new Map();

  const dfs = (used: number, total: number) => {
    if (total <= 0) {
      return false;
    }
    const key = used.toString();
    if (dp.has(key)) {
      return dp.get(key) as boolean;
    }
    for (let i = 1; i <= maxChoosableInteger; i++) {
      const cur = 1 << i;
      if ((cur & used) === 0) {
        if (!dfs(used | cur, total - i)) {
          dp.set(key, true);
          return true;
        }
      }
    }
    dp.set(key, false);
    return false;
  };
  return dfs(0, desiredTotal);
}
// @lc code=end

/*
// @lcpr case=start
// 10\n11\n
// @lcpr case=end

// @lcpr case=start
// 10\n0\n
// @lcpr case=end

// @lcpr case=start
// 10\n1\n
// @lcpr case=end

 */
