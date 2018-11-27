'use strict';

const BinarySearchTree = require('../trees/binary-tree.js');


describe('Binary Search Trees', () => {
  it('can create an empty tree.', () => {
    let tree = new BinarySearchTree;
    expect(tree.root).toBeDefined();
  });
  it('can add a node to an empty tree', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    expect(tree.root.value).toBe(10);
  });
  it('adds lower values to the left', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(5);
    expect(tree.root.left.value).toBe(5);
  });
  it('adds higher values to the right', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(20);
    expect(tree.root.right.value).toBe(20);
  });
  it('places multiple values in expected binary pattern', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(20);
    tree.add(5);
    tree.add(15);
    tree.add(1);
    expect(tree.root.left && tree.root.right).toBeDefined();
    expect(tree.root.left.left.value).toBe(1);
    expect(tree.root.right.left.value).toBe(15);
    expect(tree.root.right.right).toBeNull();
  });
  it('can search', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(20);
    tree.add(5);
    let res = tree.search(5);
    console.log(res);
    expect(res).toBe(10);
  });
});