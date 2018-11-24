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
    return this;
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

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    if (!this.front) {
      let newNode = new Node(value);
      this.front = newNode;
      return this;
    }
    let currentNode = this.front;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    currentNode.next = newNode;
    return this;
  }

  dequeue() {
    let front = this.front;    
    this.front = this.front.next;
    return front;
  }

  peek() {
    return this.front;
  }
}

module.exports = Stack;