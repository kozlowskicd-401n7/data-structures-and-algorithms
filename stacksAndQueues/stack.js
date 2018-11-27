'use strict';

const Node = require('../lib/node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let pop = this.top;
    this.top = this.top.next;
    return pop;
  }

  peek() {
    return this.top;
  }
}

module.exports = Stack;