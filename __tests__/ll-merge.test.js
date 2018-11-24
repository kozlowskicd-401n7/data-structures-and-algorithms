'use strict';

const LinkedList = require('../linked-lists/linkedlist.js');
const mergeList = require('../llMerge/ll-merge.js');

const list1 = new LinkedList;
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);
list1.append(9);
const list2 = new LinkedList;
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);
list2.append(10);

describe('Merging 2 Linked Lists', () => {
  it('can accept two linked lists as arguments', () => {
    let results;
    try {
      results = mergeList(list1, list2);
    }
    catch(error) {
      results = undefined;
    }
    expect(results).toBeDefined();
  });
  it('returns a new linked list', () => {
    let results = mergeList(list1, list2);
    expect(results).toBeInstanceOf(Object);
    expect(results.head).toBeTruthy();
    expect(results.append).toBeDefined();
  });
  it('adds to the new list with one item from list1, then one from list2', () => {
    let results = mergeList(list1, list2);
    expect(results.head.value).toBe(1);
    expect(results.head.next.value).toBe(2);
  });
  it('zips both lists together completely', () => {
    let merge = mergeList(list1, list2);
    let results = merge.serialize();
    expect(results).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});