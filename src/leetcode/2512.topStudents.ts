/*
 * @lc app=leetcode.cn id=2512 lang=typescript
 *
 * [2512] 奖励最顶尖的 K 名学生
 */

// @lc code=start

const parseReport = (s: string, feedBackMap: Record<string, number>) => {
  const reportWords = s.split(' ');
  let count = 0;
  reportWords.forEach((word) => {
    if (typeof feedBackMap[word] === 'number') {
      count += feedBackMap[word];
    }
  });
  return count;
};
function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  const feedBackMap: Record<string, number> = {};
  for (const word of positive_feedback) {
    feedBackMap[word] = 3;
  }
  for (const word of negative_feedback) {
    feedBackMap[word] = -1;
  }
  const feedBacks = new Array<{ count: number; id: number }>(student_id.length).fill({
    count: 0,
    id: -1,
  });
  report.forEach(
    (r, i) =>
      (feedBacks[i] = {
        count: parseReport(r, feedBackMap),
        id: student_id[i],
      })
  );
  feedBacks.sort((a, b) => (a.count === b.count ? a.id - b.id : b.count - a.count));
  return feedBacks.slice(0, k).map((f) => f.id);
}
// @lc code=end

const res = topStudents(
  ['smart', 'brilliant', 'studious'],
  ['not'],
  ['this student is studious', 'the student is smart'],
  [1, 2],
  2
);

console.log(res, 'res');
