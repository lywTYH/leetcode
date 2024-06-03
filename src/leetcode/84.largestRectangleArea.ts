/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  // let max = 0;
  // for (let index = 0; index < heights.length; index++) {
  //   let left = index;
  //   let right = index;
  //   while (left >= 0 && heights[left] >= heights[index]) {
  //     left--;
  //   }
  //   while (right < heights.length && heights[right] >= heights[index]) {
  //     right++;
  //   }
  //   max = Math.max(max, heights[index] * (right - left - 1));
  // }
  // return max;

  const length = heights.length;
  const left: number[] = new Array(length).fill(-1);
  const right: number[] = new Array(length).fill(length);
  const stack: number[] = [];
  for (let index = 0; index < length; index++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[index]) {
      // 说明下标j的右边最近小于其高度的下标就是i
      const j = stack.pop() as number;
      right[j] = index;
    }
    if (stack.length === 0) {
      left[index] = -1;
    } else {
      left[index] = stack[stack.length - 1];
    }
    stack.push(index);
  }
  let ans = 0;
  for (let i = 0; i < length; i++) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
}
// @lc code=end
largestRectangleArea([2, 1, 5, 6, 2, 3]);
