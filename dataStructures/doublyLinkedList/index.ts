import DoublyLinkedListNode from './doublyLinkedListNode';
import Comparator, { Compare } from '../../utils/comparator';

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

  public prepend(value: T) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  public delete(value: T) {
    let deleteNode: DoublyLinkedListNode<T> | undefined;
    let currentNode = this.head;
    if (!currentNode) {
      return;
    }
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        if (deleteNode === this.head) {
          this.head = deleteNode.next;
          if (this.head) {
            this.head.previous = undefined;
          }
          if (deleteNode === this.tail) {
            this.tail = undefined;
          }
        } else if (deleteNode === this.tail) {
          this.tail = deleteNode.previous!;
          this.tail.next = undefined;
        } else {
          const preNode = currentNode.previous!;
          const nextNode = currentNode.next!;
          preNode.next = nextNode;
          nextNode.previous = preNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deleteNode;
  }

  public find(value: T) {
    if (!this.head) {
      return;
    }
    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  public deleteTail() {
    const deleteNode = this.tail;
    if (this.tail) {
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        this.tail = this.tail.previous!;
        this.tail.next = undefined;
      }
    }
    return deleteNode;
  }
  public deleteHead() {
    const deleteNode = this.head;
    if (this.head) {
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        this.head = this.head.next!;
        this.head.previous = undefined;
      }
    }
    return deleteNode;
  }
  public fromArray(values: T[]) {
    values.forEach(value => this.append(value));
    return this;
  }

  public toArray() {
    const nodes: Array<DoublyLinkedListNode<T>> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  public toString(callback?: (v: T) => string) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}
