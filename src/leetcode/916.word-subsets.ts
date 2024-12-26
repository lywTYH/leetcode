/*
 * @lc app=leetcode.cn id=916 lang=typescript
 * @lcpr version=30204
 *
 * [916] 单词子集
 *
 * https://leetcode.cn/problems/word-subsets/description/
 *
 * algorithms
 * Medium (47.42%)
 * Likes:    99
 * Dislikes: 0
 * Total Accepted:    11.1K
 * Total Submissions: 23.5K
 * Testcase Example:  '["amazon","apple","facebook","google","leetcode"]\n["e","o"]'
 *
 * 给你两个字符串数组 words1 和 words2。
 *
 * 现在，如果 b 中的每个字母都出现在 a 中，包括重复出现的字母，那么称字符串 b 是字符串 a 的 子集 。
 *
 *
 * 例如，"wrr" 是 "warrior" 的子集，但不是 "world" 的子集。
 *
 *
 * 如果对 words2 中的每一个单词 b，b 都是 a 的子集，那么我们称 words1 中的单词 a 是 通用单词 。
 *
 * 以数组形式返回 words1 中所有的通用单词。你可以按 任意顺序 返回答案。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["e","o"]
 * 输出：["facebook","google","leetcode"]
 *
 *
 * 示例 2：
 *
 * 输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["l","e"]
 * 输出：["apple","google","leetcode"]
 *
 *
 * 示例 3：
 *
 * 输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["e","oo"]
 * 输出：["facebook","google"]
 *
 *
 * 示例 4：
 *
 * 输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["lo","eo"]
 * 输出：["google","leetcode"]
 *
 *
 * 示例 5：
 *
 * 输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 =
 * ["ec","oc","ceo"]
 * 输出：["facebook","leetcode"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= words1.length, words2.length <= 10^4
 * 1 <= words1[i].length, words2[i].length <= 10
 * words1[i] 和 words2[i] 仅由小写英文字母组成
 * words1 中的所有字符串 互不相同
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function wordSubsets(words1: string[], words2: string[]): string[] {
  const tempHash: Record<string, number> = {};
  const getWordHash = (word: string) => {
    const wordHash: Record<string, number> = {};
    for (let i = 0; i < word.length; i++) {
      if (wordHash[word[i]]) {
        wordHash[word[i]]++;
      } else {
        wordHash[word[i]] = 1;
      }
    }
    return wordHash;
  };
  words2.forEach((word) => {
    const wordHash = getWordHash(word);
    Object.keys(wordHash).forEach((key) => {
      if (tempHash[key]) {
        tempHash[key] = Math.max(tempHash[key], wordHash[key]);
      } else {
        tempHash[key] = wordHash[key];
      }
    });
  });
  const ans: string[] = [];
  for (let index = 0; index < words1.length; index++) {
    const curWordHash = getWordHash(words1[index]);
    const valid = Object.keys(tempHash).every((key) => {
      return curWordHash[key] && tempHash[key] <= curWordHash[key];
    });
    if (valid) {
      ans.push(words1[index]);
    }
  }
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// ["amazon","apple","facebook","google","leetcode"]\n["e","o"]\n
// @lcpr case=end

// @lcpr case=start
// ["amazon","apple","facebook","google","leetcode"]\n["l","e"]\n
// @lcpr case=end

// @lcpr case=start
// ["amazon","apple","facebook","google","leetcode"]\n["e","oo"]\n
// @lcpr case=end

// @lcpr case=start
// ["amazon","apple","facebook","google","leetcode"]\n["lo","eo"]\n
// @lcpr case=end

// @lcpr case=start
// ["amazon","apple","facebook","google","leetcode"]\n["ec","oc","ceo"]\n
// @lcpr case=end

 */
