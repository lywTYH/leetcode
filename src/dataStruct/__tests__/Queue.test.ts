import Queue from '../Queue';

type Data = {
  value: string;
  key: string;
};
describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it('should enqueue data to queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.toString()).toBe('1,2');
  });

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue<Data>();
    queue.enqueue({ value: 'test1', key: 'key1' });
    queue.enqueue({ value: 'test2', key: 'key2' });
    const stringify = (value: Data) => `${value.key}:${value.value}`;
    expect(queue.toString(stringify)).toBe('key1:test1,key2:test2');
    queue.dequeue();
    expect(queue.toString(stringify)).toBe('key2:test2');
    queue.dequeue();
    expect(queue.toString(stringify)).toBe('');
  });

  it('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2).dequeue().dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
