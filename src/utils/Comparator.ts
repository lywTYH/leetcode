import { Compare, DefineCompare } from '../App';

class Comparator {
  public compare: DefineCompare;

  constructor(compare?: DefineCompare) {
    this.compare = compare || this.defaultCompare;
  }

  public equal: Compare = (a, b) => {
    return this.compare(a, b) === 0;
  };

  public lessThan: Compare = (a, b) => {
    return this.compare(a, b) < 0;
  };

  public greaterThan: Compare = (a, b) => {
    return this.compare(a, b) > 0;
  };

  public lessThanOrEqual: Compare = (a, b) => {
    return this.lessThan(a, b) || this.equal(a, b);
  };

  public greaterThanOrEqual: Compare = (a, b) => {
    return this.greaterThan(a, b) || this.equal(a, b);
  };

  public reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }

  private defaultCompare: DefineCompare = (a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  };
}
export default Comparator;
