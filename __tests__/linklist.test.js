'use strict';

const LinkedList = require('../linked-lists/linkedlist.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(Object);
    expect(list.head).toBeNull();
  });
    
  it('append()', ()=> {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);
    let anotherOne = 'Another One';
    list.append(anotherOne);
  });

  it('prepend()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    list.append(firstValue);
    list.prepend(secondValue);
    expect(list.head.value).toEqual(secondValue);
  });

  it('reverse()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';
    list.append(firstValue);
    list.append(secondValue);
    list.append(thirdValue);
    list.reverse();
    expect(list.head.value).toEqual(thirdValue);
  });

  it('remove()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';
    list.append(firstValue);
    list.append(secondValue);
    list.append(thirdValue);
    list.remove(2);
    expect(list.length).toEqual(2);
    expect(list.head.value).toEqual(firstValue);
  });
  
  it('serialize()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';
    list.append(firstValue);
    list.append(secondValue);
    list.append(thirdValue);
    let value = list.serialize();
    expect(value).toEqual(['First One', 'Second One', 'Third One']);
  });
});

describe('Linked List Insertions', () => {
  it('.insertBefore() inserts a new node before the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(3);
    list.insertBefore(3,2);
    let value = list.serialize();
    expect(list.length).toBe(3);
    expect(value).toEqual([1,2,3]);

  });
  it('.insertAfter() inserts a new node after the given value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(3);
    list.insertAfter(1,2);
    let value = list.serialize();
    expect(list.length).toBe(3);
    expect(value).toEqual([1,2,3,]);
  });
});

describe('Linked List getKthFromEnd()', () => {
  it('can get the last value', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(3);
    let value = list.getKthFromEnd(0);
    expect(value).toBe(3);
  });
  it('can get the value at any given point from the end', () => {
    let list = new LinkedList;
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.getKthFromEnd(0)).toBe(3);
    expect(list.getKthFromEnd(1)).toBe(2);
    expect(list.getKthFromEnd(2)).toBe(1);
  });
})