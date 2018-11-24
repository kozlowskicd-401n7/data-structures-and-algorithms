'use strict';

const LinkedList = require('../ll_insertions.js');

describe('Linked List Insertions', () => {
  it('.insertBefore() inserts a new node before the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(3);
    list.insertBefore(3,2);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(2);
  });
  it('.insertAfter() inserts a new node after the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(3);
    list.insertAfter(1,2);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(2);
  });
});