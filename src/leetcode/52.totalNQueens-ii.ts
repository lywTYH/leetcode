/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N 皇后 II
 */

// @lc code=start
const isValidPosition2 = (board: string[][], row: number, col: number, n: number) => {
  for (let i = 0; i < row; ++i) {
    if (board[i][col] == 'Q') {
      return false;
    }
  }
  // Check if there is a queen in the upper left
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }
  // Check if there is a queen in the upper right
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }
  return true;
};
function totalNQueens(n: number): number {
  let ans = 0;
  const board: string[][] = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  const queensBacktrack = (row: number) => {
    if (row === n) {
      ans++;
    } else {
      for (let col = 0; col < n; ++col) {
        if (isValidPosition2(board, row, col, n)) {
          board[row][col] = 'Q';
          queensBacktrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  };
  queensBacktrack(0);
  return ans;
}
// @lc code=end
totalNQueens(4);
