'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  Add(value) {
    let current = this.root;
    if (!current) {
      this.root = new Node(value);
    }
    else {
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
        }
        else {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
  }

  contains(value) {
    let isHere = false;
    let search = (node) => {
      if (node.value === value) isHere = true;
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    };
    search(this.root);
    return isHere;
  }
}

module.exports = BinarySearchTree;
