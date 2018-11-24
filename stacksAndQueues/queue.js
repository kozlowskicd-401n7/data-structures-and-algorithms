'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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

module.exports = Queue;