/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
const isValidPosition = (board: string[][], row: number, col: number, n: number) => {
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
function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[][] = Array(n)
    .fill('.')
    .map(() => Array(n).fill('.'));
  const QueensBacktrack = (row: number) => {
    if (row == n) {
      result.push(board.map((row) => row.join('')));
    }
    for (let col = 0; col < n; ++col) {
      if (isValidPosition(board, row, col, n)) {
        board[row][col] = 'Q';
        QueensBacktrack(row + 1);
        board[row][col] = '.';
      }
    }
  };
  QueensBacktrack(0);
  return result;
}
// @lc code=end

solveNQueens(4);
