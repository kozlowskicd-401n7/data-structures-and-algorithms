'use strict';

const Node = require('../lib/node.js');
class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {  // Time: O(n)  Space: 0(1)
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }

  prepend(value) {  // o(1)
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++; 
  }

  insertBefore(val, newVal) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value == val) {
        let newNode = new Node(newVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return this;
      }
    }
    return null;
  }

  insertAfter(val, newVal) {
    let currentNode = this.head;
    while(currentNode.next) {
      if (currentNode.value == val) {
        let newNode = new Node(newVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return this;
      }
    }
    return null;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }

  remove(offset) {
    let prevNode = null;
    let nextNode = null;
    let index = 0;

    let currentNode = this.head;
    while (index < offset) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }
    let returnVal = currentNode;
    prevNode.next = currentNode.next;
    this.length--;
    currentNode = null;
    return returnVal;
  }

  serialize() {
    let serialized = [];
    let currentNode = this.head;
    while(currentNode.next) {
      serialized.push(currentNode);
      currentNode = currentNode.next;
    }
    serialized.push(currentNode);
    this.serialized = serialized;
    return serialized;
  }

  getMiddle() {
    let tortoise = this.head;
    let hare = this.head;
    while(hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
    }
    return tortoise;
  }

  getKthFromEnd(value) {
    let fast = this.head;
    let slow = this.head;
    for (let i = 0; i < value; i++) {
      fast = fast.next;
    }
    while(fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
}

module.exports = LinkedList;
