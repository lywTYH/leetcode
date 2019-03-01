export type LinkNode = object | number | string;

export default class LinkedListNode<T = LinkNode> {
  public value: T;
  public next?: LinkedListNode<T>;

  constructor(val: T, next?: LinkedListNode<T>) {
    this.value = val;
    this.next = next;
  }

  public toString(callback?: (val: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
