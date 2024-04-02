/*
 * @lc app=leetcode.cn id=1773 lang=typescript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  return items.filter((item) => {
    return item[ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2] === ruleValue;
  }).length;
}
// @lc code=end
