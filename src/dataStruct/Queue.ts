/**
 * queue FIFO (first in,first out)
 */

import LinkedList from './LinkedList';
export default class Queue<T = string | number> {
  public linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList<T>();
    return this;
  }
  isEmpty() {
    return !this.linkedList.head;
  }
  peek() {
    if (!this.linkedList.head) {
      return;
    }
    return this.linkedList.head.value;
  }
  enqueue(value: T) {
    this.linkedList.append(value);
    return this;
  }
  dequeue() {
    this.linkedList.deleteHead();
    return this;
  }
  toString(callBack?: (_value: T) => string) {
    return this.linkedList.toString(callBack);
  }
}
