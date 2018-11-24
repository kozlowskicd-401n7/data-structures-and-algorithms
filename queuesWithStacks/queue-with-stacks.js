'use strict';

const Stack = require('../stacksAndQueues/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
    this.length = 0;
  }
  enqueue(value) {
    this.stack1.push(value);
    this.length++;
    return this;
  }

  dequeue() {
    for (let i = 1; i <= this.length; i++) {
      this.stack2.push(this.stack1.pop().value);
    }
    let output = this.stack2.pop();
    this.length--;
    for (let i = 1; i <= this.length; i++) {
      this.stack1.push(this.stack2.pop().value);
    }
    return output;
  }
}

module.exports = PseudoQueue;