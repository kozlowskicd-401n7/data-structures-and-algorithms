'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    return this.top.value;
  }
}

module.exports = Stack;