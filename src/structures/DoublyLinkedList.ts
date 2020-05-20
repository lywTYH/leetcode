import Comparator, { Compare } from '../utils/Comparator';

export class DoublyLinkedListNode<T> {
  public value: T;
  public next?: DoublyLinkedListNode<T>;
  public previous?: DoublyLinkedListNode<T>;
  constructor(value: T, next?: DoublyLinkedListNode<T>, previous?: DoublyLinkedListNode<T>) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
  public toString(callback?: (val: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T>;
  public tail?: DoublyLinkedListNode<T>;
  public compare: Comparator<T>;
  constructor(compare?: Compare<T>) {
    this.compare = new Comparator(compare);
  }
  public append(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return this;
    }
  }
}
