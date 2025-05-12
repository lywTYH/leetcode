/*
 * @lc app=leetcode.cn id=79 lang=typescript
 * @lcpr version=30204
 *
 * [79] 单词搜索
 *
 * https://leetcode.cn/problems/word-search/description/
 *
 * algorithms
 * Medium (47.66%)
 * Likes:    1993
 * Dislikes: 0
 * Total Accepted:    679K
 * Total Submissions: 1.4M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例 1：
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 *
 *
 * 示例 2：
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 *
 *
 * 示例 3：
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board 和 word 仅由大小写英文字母组成
 *
 *
 *
 *
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 *
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
enum Direction {
  up,
  down,
  left,
  right
}
function exist(board: string[][], word: string): boolean {
  let ans = false
  if (word.length === 0 || board.length === 0 || board[0].length===0) {
    return ans;
  }
  const row = board.length;
  const col = board[0].length;
  const check =(nexRow:number,nextCol:number,_index:number)=>{
    const isInBoard=  nexRow >=0 && nexRow < row && nextCol<col && nextCol>=0;
    return isInBoard && board[nexRow][nextCol]===word[_index]
  }
  const getNextPosition=(direction:Direction, curRow:number,curCol:number)=>{
    switch(direction){
      case Direction.up:
        return [curRow-1,curCol];
      case Direction.down:
        return [curRow+1,curCol];
      case Direction.left:
        return [curRow,curCol-1];
      case Direction.right:
        return [curRow,curCol+1];
    }
  }
  const backtrack =(_row:number,_col:number,_index:number)=>{
    if (ans) {
      return;
    }
    if (_index === word.length) {
      ans = true;
      return;
    }
    [Direction.up,Direction.down,Direction.left,Direction.right].forEach((value)=>{
      const [nextRow,nextCol] = getNextPosition(value,_row,_col);
      if(check(nextRow,nextCol,_index)){
        const temp = board[nextRow][nextCol];
        board[nextRow][nextCol] = "";
        backtrack(nextRow,nextCol, _index + 1);
        board[nextRow][nextCol] = temp;
      }
    })
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        const temp = board[i][j];
        board[i][j] = ""; // 走过的位置设置为''
        backtrack(i, j, 1);
        board[i][j] = temp; // 回溯回来又复原
      }
    }
  }
  return ans
};
// @lc code=end

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */

