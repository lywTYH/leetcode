export default class DoublyLinkedListNode<T> {
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
