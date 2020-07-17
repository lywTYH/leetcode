import { ToString, Compare } from 'types';
import Comparator from '../utils/comparator';

export class Node<T> {
  public value: T;
  public next?: Node<T>;
  public previous?: Node<T>;
  constructor(value: T, next?: Node<T>, previous?: Node<T>) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
  public toString(callback?: ToString<T>) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default class DoublyLinkedList<T> {
  public compare: Comparator<T>;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor(compare?: Compare<T>) {
    this.compare = new Comparator(compare);
  }

  public append(value: T) {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  public prepend(value: T) {
    const newNode = new Node(value, this.head);
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
    let deleteNode: Node<T> | undefined;
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

  public deleteTail() {
    const deleteNode = this.tail;
    if (this.tail) {
      if (this.tail === this.head) {
        this.tail = this.head = undefined;
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
      if (this.tail === this.head) {
        this.tail = this.head = undefined;
      } else {
        this.head = this.head.next!;
        this.head.previous = undefined;
      }
    }
    return deleteNode;
  }

  public find(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  public fromArray(values: T[]) {
    values.forEach((value) => this.append(value));
    return this;
  }

  public toArray() {
    const nodes: Array<Node<T>> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public toString(callback?: (val: T) => string) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
