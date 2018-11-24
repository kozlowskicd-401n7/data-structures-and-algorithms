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
    this.length = 0;
  }
  
  enqueue(value) {
    if (!this.front) {
      let newNode = new Node(value);
      this.front = newNode;
      this.length++
      return this;
    }
    let currentNode = this.front;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    currentNode.next = newNode;
    this.length++;
    return this;
  }
  
  dequeue() {
    let front = this.front;    
    this.front = this.front.next;
    this.length--;
    return front;
  }
  
  peek() {
    return this.front;
  }
}

module.exports = Queue;