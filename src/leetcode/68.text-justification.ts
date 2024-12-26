/*
 * @lc app=leetcode.cn id=68 lang=typescript
 * @lcpr version=30204
 *
 * [68] 文本左右对齐
 *
 * https://leetcode.cn/problems/text-justification/description/
 *
 * algorithms
 * Hard (55.14%)
 * Likes:    447
 * Dislikes: 0
 * Total Accepted:    93.3K
 * Total Submissions: 168.8K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 *
 * 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth
 * 个字符。
 *
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 *
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 *
 * 注意:
 *
 *
 * 单词是指由非空格字符组成的字符序列。
 * 每个单词的长度大于 0，小于等于 maxWidth。
 * 输入单词数组 words 至少包含一个单词。
 *
 *
 *
 *
 * 示例 1:
 *
 * 输入: words = ["This", "is", "an", "example", "of", "text", "justification."],
 * maxWidth = 16
 * 输出:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 *
 *
 * 示例 2:
 *
 * 输入:words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
 * 输出:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * 解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
 * 因为最后一行应为左对齐，而不是左右两端对齐。
 * ⁠    第二行同样为左对齐，这是因为这行只包含一个单词。
 *
 *
 * 示例 3:
 *
 * 输入:words =
 * ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]，maxWidth
 * = 20
 * 输出:
 * [
 * "Science  is  what we",
 * ⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= words.length <= 300
 * 1 <= words[i].length <= 20
 * words[i] 由小写英文字母和符号组成
 * 1 <= maxWidth <= 100
 * words[i].length <= maxWidth
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];

  words.forEach((word) => {
    const last = res[res.length - 1];
    if (!last) {
      res.push(word);
      return;
    }
    if (last.length + 1 + word.length <= maxWidth) {
      res[res.length - 1] = `${last} ${word}`;
      return;
    }
    res.push(word);
  });
 const ans= res.map((item) => {
    let space = maxWidth - item.length;
    const wordList = item.split(' ');
    const wordCount = wordList.length;
    if (wordCount === 1) {
      return item + ' '.repeat(space);
    }
    const spaceCount = wordCount - 1;
    const spaceAvg = Math.ceil(space / spaceCount);
    return wordList.reduce((acc, word, index) => {
      if (space > 0) {
        acc = space > spaceAvg ? acc + word + ' '.repeat(spaceAvg) : acc + word + ' '.repeat(space);
        space = space - spaceAvg;
      }else{
        acc =index === wordCount - 1 ? acc + word: acc + word + ' ';
      }
      return acc;
    }, '');
  });
  return ans;
}
// @lc code=end
fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16);
/*
// @lcpr case=start
// ["This", "is", "an", "example", "of", "text", "justification."]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["What","must","be","acknowledgment","shall","be"]\n16\n
// @lcpr case=end

// @lcpr case=start
// ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we"\n20\n
// @lcpr case=end

 */
