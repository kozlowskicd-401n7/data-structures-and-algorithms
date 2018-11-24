'use strict';

const Stack = require('../stacksAndQueues/stack.js');
const Queue = require('../stacksAndQueues/queue.js');

describe('Stacks', () => {
  it('can create and empty stack', () => {
    let stack = new Stack;
    expect(stack).toBeInstanceOf(Object);
  });
  it('can push a new node', () => {
    let stack = new Stack;
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
  it('adds new nodes to the top', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
  });
  it('can pop from top of stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    stack.pop();
    expect(stack.top.value).toBe(1);
  });
  it('can peek the top node', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    stack.peek();
    expect(stack.top.value).toBe(2);
  });
});
describe('Queues', () => {
  it('can create an empty queue', () => {
    let queue = new Queue;
    expect(queue).toBeInstanceOf(Object);
    expect(queue.enqueue).toBeDefined();
  });
  it('can enqueue a node', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });
  it('can add multiple nodes', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
  });
  it('dequeues first-in first-out', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    let results = queue.dequeue();
    expect(results.value).toBe(1);
    expect(queue.length).toBe(1);
  });
  it('can peek the front of the queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    let results = queue.peek();
    expect(results.value).toBe(1);
    expect(queue.length).toBe(2);
  });
});