'use strict';

import Stack from './stacks-and-queues.js';
// import Queue from './stacks-and-queues.js';

describe('Stacks', () => {
  it('can create and empty stack', () => {
    let stack = new Stack;
    expect(stack).toBeInstanceOf(Object);
  });
  it('can push a new node', () => {
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
  it('adds new nodes to the top', () => {

  });
  it('can pop from top of stack', () => {

  });
  it('can peek the top node', () => {

  });
})
describe('Queues', () => {
  it('can create an empty queue', () => {

  });
  it('can enqueue a node', () => {

  });
  it('adds new nodes to the back-to-front', () => {

  });
  it('dequeues first-in first-out', () => {

  });
  it('can peek the front of the queue', () => {

  });
});