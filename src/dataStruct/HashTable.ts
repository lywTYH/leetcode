import LinkedList from './LinkedList';

const defaultHashTableSize = 32;
export default class HashTable<T = string | number> {
  public buckets: LinkedList<{ key: string; value: T }>[];
  public keys: {
    [key in string]: number;
  };
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */

  hash(key: string): number {
    const hashKey = Array.from(key).reduce((hashAccumulator, keySymbol) => {
      return hashAccumulator + keySymbol.charCodeAt(0);
    }, 0);
    return hashKey % this.buckets.length;
  }

  set(key: string, value: T) {
    const hashKey = this.hash(key);
    this.keys[key] = hashKey;
    const bucketLinkedList = this.buckets[hashKey];
    const node = bucketLinkedList.findByCallback((nodeValue) => nodeValue.key === key);
    if (node) {
      node.value.value = value;
    } else {
      bucketLinkedList.append({
        key,
        value,
      });
    }
  }

  get(key: string) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.findByCallback((nodeValue) => nodeValue.key === key);
    if (!node) {
      return;
    }
    return node.value.value;
  }

  delete(key: string) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.findByCallback((nodeValue) => nodeValue.key === key);
    if (!node) {
      return;
    }
    return bucketLinkedList.delete(node.value);
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  has(key: string) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
}
