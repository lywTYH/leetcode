import LinkedList from '../LinkedList';

export default class Queue<T> {
  public linedList: LinkedList<T>;
  constructor() {
    this.linedList = new LinkedList<T>();
  }
  public isEmpty() {
    return !this.linedList.head;
  }

  public peek() {
    if (!this.linedList.head) {
      return;
    } else {
      return this.linedList.head.value;
    }
  }
  public enqueue(value: T) {
    this.linedList.append(value);
  }
  public dequeue() {
    const removedHead = this.linedList.deleteHead();
    return removedHead;
  }
  public toString(callback?: (val: T) => string) {
    return this.linedList.toString(callback);
  }
}
