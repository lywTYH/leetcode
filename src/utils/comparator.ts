import { Compare } from 'types';

export default class Comparator<T = number> {
  private compare: Compare<T>;
  constructor(compare?: Compare<T>) {
    this.compare = compare || this.defaultCompare;
  }

  public equal = (a: T, b: T) => {
    return this.compare(a, b) === 0;
  };

  public lessThan = (a: T, b: T) => {
    return this.compare(a, b) < 0;
  };

  public greaterThan = (a: T, b: T) => {
    return this.compare(a, b) > 0;
  };

  public lessThanOrEqual = (a: T, b: T) => {
    return this.lessThan(a, b) || this.equal(a, b);
  };

  public greaterThanOrEqual = (a: T, b: T) => {
    return this.greaterThan(a, b) || this.equal(a, b);
  };

  private defaultCompare(a: T, b: T) {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }
}
