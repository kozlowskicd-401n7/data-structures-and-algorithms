'use strict';
const Stack = require('../stacksAndQueues/stack.js');
const PseudoQueue = require('../queuesWithStacks/queue-with-stacks.js');

describe('Queues with Stacks', () => {
  it('is a constructor class', () => {
    let queue = new PseudoQueue;
    expect(queue.stack1).toBeInstanceOf(Object);
    expect(queue.stack2).toBeInstanceOf(Stack);
  });
  it('enqueue takes in a value', () => {
    let queue = new PseudoQueue;
    queue.enqueue(5);
    expect(queue.stack1.top.value).toEqual(5);
  });
  it('holds in a stack for storage', () => {
    let queue = new PseudoQueue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
    expect(queue.stack1.top.value).toEqual(3);
  });
  it('dequeue returns a node', () => {
    let queue = new PseudoQueue;
    queue.enqueue(1);
    let results = queue.dequeue();
    expect(results).toBeInstanceOf(Object);
  });
  it('dequeue return on a first-in-first-out basis', () => {
    let queue = new PseudoQueue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let one = queue.dequeue();
    let two = queue.dequeue();
    let three = queue.dequeue();
    expect(one.value).toBe(1);
    expect(two.value).toBe(2);
    expect(three.value).toBe(3);
  });
});