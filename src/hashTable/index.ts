import LinkedList from '../linkedList';
const DEFAULT_HASH_TABLE_SIZE = 32;

export default class HashTable {
  public keys: {
    [key: string]: number;
  };
  public buckets: Array<LinkedList<{ key: string; value: string | number }>>;
  constructor(size = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(size)
      .fill(undefined)
      .map(() => new LinkedList());
    this.keys = {};
  }
  public hash(key: string) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }

  public set(key: string, value: string | number) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(undefined, v => v.key === key);
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  public get(key: string) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find(undefined, nodeValue => nodeValue.key === key);
    return node ? node.value.value : undefined;
  }

  public delete(key: string) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(undefined, nodeValue => nodeValue.key === key);
    if (node) {
      return bucketLinkedList.delete(node.value);
    }
    return;
  }

  public has(key: string) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  public getKeys() {
    return Object.keys(this.keys);
  }
}
