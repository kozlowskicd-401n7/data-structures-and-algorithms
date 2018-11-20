'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let contents = [];
    let _step = node => {
      contents.push(node.value);
      if (node.left) {
        _step(node.left);
      }
      if (node.right) {
        _step(node.right);
      }
    };
    _step(this.root);
    return contents;
  }
  inOrder() {
    let contents = [];
    let _step = node => {
      if (node.left) {
        _step(node.left);
      }
      contents.push(node.value);
      if (node.right) {
        _step(node.right);
      }
    };
    _step(this.root);
    return contents;
  }
  postOrder() {
    let contents = [];
    let _step = node => {
      if(node.left) {
        _step(node.left);
      }
      if(node.right) {
        _step(node.right);
      }
      contents.push(node.value);
    };
    _step(this.root);
    return contents;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    let node = this.root;
    let _step = node => {
      if (node.value > value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        else {
          return _step(node.left);
        }
      }
      else if (node.value < value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        else {
          return _step(node.right);
        }
      }
      else {throw null;}
    };
    if (node === null) {
      this.root = new Node(value);
      return;
    }
    else {
      _step(node); 
    }
        
  }
}
let tree = new Tree;
let binaryTree = new BinarySearchTree;

tree.preOrder;
binaryTree.add(10);
binaryTree.add(15);
binaryTree.add(2);
binaryTree.add(9);
binaryTree.add(42);
binaryTree.add(1);
binaryTree.add(33);
binaryTree.add(25);
binaryTree.add(88);
binaryTree.add(27);
binaryTree.add(52);

console.log(binaryTree);