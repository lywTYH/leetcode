import Comparator from '../utils/comparator';
import { MinHeap } from './Heap';

export default class PriorityQueue<T> extends MinHeap<T> {
  public priorities: Map<T, number>;
  public compare: Comparator<T>;
  constructor() {
    super();
    this.priorities = new Map();
    this.compare = new Comparator<T>(this.comparePriority.bind(this));
  }
  add(item: T, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }
  remove(item: T, customFindingComparator?: Comparator<T>) {
    super.remove(item, customFindingComparator);
    this.priorities.delete(item);
    return this;
  }
  changePriority(item: T, priority: number) {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, priority);
    return this;
  }
  findByValue(item: T) {
    return this.find(item, new Comparator(this.compareValue));
  }
  hasValue(item: T) {
    return this.findByValue(item).length > 0;
  }
  comparePriority(first: T, second: T) {
    const valueFirst = this.priorities.get(first);
    const valueSecond = this.priorities.get(second);
    if (valueFirst === valueSecond) {
      return 0;
    }
    if (valueFirst === undefined) {
      return -1;
    }
    if (valueSecond === undefined) {
      return 1;
    }
    return valueFirst < valueSecond ? -1 : 1;
  }
  compareValue(a: T, b: T) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}
