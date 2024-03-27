/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
type State = 'start' | 'signed' | 'in_number' | 'end';
class Automaton {
  private _ans: number = 0;
  private state: State = 'start';
  private table: Record<string, State[]> = {
    start: ['start', 'signed', 'in_number', 'end'],
    signed: ['end', 'end', 'in_number', 'end'],
    in_number: ['end', 'end', 'in_number', 'end'],
    end: ['end', 'end', 'end', 'end'],
  };
  sign: 1 | -1 = 1;

  get(c: string) {
    this.state = this.table[this.state][this.get_col(c)];
    switch (this.state) {
      case 'in_number':
        this._ans = this._ans * 10 + Number(c);
        return this.state;
      case 'signed':
        this.sign = c === '+' ? 1 : -1;
        return this.state;
      default:
        return this.state;
    }
  }

  get ans() {
    const limit = Math.pow(2, 31);
    const safeAns = this.sign === 1 ? Math.min(this._ans, limit - 1) : Math.min(this._ans, limit);
    return this.sign === 1 ? safeAns : -safeAns;
  }

  private get_col(c: string) {
    if (c === ' ') {
      return 0;
    }
    if (c === '+' || c === '-') {
      return 1;
    }
    if (!isNaN(Number(c))) {
      return 2;
    }
    return 3;
  }
}

function myAtoi(s: string): number {
  const automaton = new Automaton();
  for (let i = 0; i < s.length; ++i) {
    const state = automaton.get(s[i]);
    if (state === 'end') {
      break;
    }
  }
  return automaton.ans;
}
// @lc code=end
