/*
 * @lc app=leetcode.cn id=2166 lang=typescript
 *
 * [2166] 设计位集
 */

// @lc code=start
class Bitset {
  _zeroList: Set<number>;
  _oneList: Set<number>;
  constructor(size: number) {
    this._zeroList = new Set<number>(new Array(size).keys());
    this._oneList = new Set<number>();
  }

  fix(idx: number): void {
    this._oneList.add(idx);
    this._zeroList.delete(idx);
  }

  unfix(idx: number): void {
    this._oneList.delete(idx);
    this._zeroList.add(idx);
  }

  flip(): void {
    [this._oneList, this._zeroList] = [this._zeroList, this._oneList];
  }

  all(): boolean {
    return this._zeroList.size === 0;
  }

  one(): boolean {
    return this._oneList.size > 0;
  }

  count(): number {
    return this._oneList.size;
  }

  toString(): string {
    const size = this._zeroList.size + this._oneList.size;
    const bits = new Array(size).fill(0).map((_, i) => (this._oneList.has(i) ? '1' : '0'));
    return bits.join('');
  }
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
// @lc code=end
