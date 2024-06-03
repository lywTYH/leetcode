/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  const paths = path.split('/');
  const stack: string[] = [];
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if (p === '' || p === '.') {
      continue;
    } else if (p === '..') {
      stack.pop();
    } else {
      stack.push(p);
    }
  }
  return '/' + stack.join('/');
}
// @lc code=end
simplifyPath('/a/./b/../../c/');
