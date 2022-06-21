'use strict';
const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log('No Nodes to eliminate');
      return null;
    }
    const node = this.top;
    this.top = node.next;
    node.next = null;
    return node.value;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }
}

module.exports = Stack;
