import LinkedList from './LinkedList';

export default class Stack<T> {
  public linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList<T>();
  }
  push(value: T) {
    this.linkedList.prepend(value);
    return this;
  }
  pop() {
    const removeHead = this.linkedList.deleteHead();
    if (removeHead) {
      return removeHead.value;
    }
    return;
  }

  isEmpty() {
    return !this.linkedList.head;
  }
  peek() {
    if (this.linkedList.head) {
      return this.linkedList.head.value;
    }
    return;
  }
  toArray() {
    return this.linkedList.toArray().map((node) => node.value);
  }
  toString(callback?: (value: T) => string) {
    return this.linkedList.toString(callback);
  }
}
