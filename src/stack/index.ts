import LinkedList from '../linkedList';
export default class Stack<T> {
  public linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList<T>();
  }
  public isEmpty() {
    return !this.linkedList.head;
  }
  public peek() {
    if (!this.linkedList.head) {
      return;
    }
    return this.linkedList.head.value;
  }
  public push(value: T) {
    this.linkedList.prepend(value);
  }
  public pop() {
    return this.linkedList.deleteHead();
  }
  public toArray() {
    return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
  }
  public toString(callback?: (val: T) => string) {
    return this.linkedList.toString(callback);
  }
}
