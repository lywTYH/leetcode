import { LinkNode, Tostring } from '../App';

export default class LinkedListNode<T = LinkNode> {
  public value: T;
  public next?: LinkedListNode<T>;

  constructor(val: T, next?: LinkedListNode<T>) {
    this.value = val;
    this.next = next;
  }

  public toString: Tostring = callback => {
    return callback ? callback(this.value) : `${this.value}`;
  };
}
