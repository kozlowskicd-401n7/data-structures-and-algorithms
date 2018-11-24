'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
    let deleteThisNode = offset;
    let index = 1;
    let currentNode = this.head;
    while (index < deleteThisNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }
    prevNode.next = currentNode.next;
    currentNode = null;
    this.length--;
  }
  serialize() {
    let serialized = [];
    let currentNode = this.head;
    while(currentNode.next) {
      serialized.push(currentNode.value);
      currentNode = currentNode.next;
    }
    serialized.push(currentNode.value);
    return serialized;
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
    return slow.value;
  }
}

module.exports = LinkedList;