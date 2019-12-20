import Comparator, { Compare } from 'util/Comparator';

export default class Heap<T> {
  public heapContainer: T[];
  public compare: Comparator<T>;
  constructor(compara: Compare<T>) {
    this.heapContainer = [];
    this.compare = new Comparator(compara);
  }

  public addItem(item: T) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
}
