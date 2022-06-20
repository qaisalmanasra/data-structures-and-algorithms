'use strict';
// imports
const Node= require('./node');
// classes
class LinkedList {
  constructor(){
    this.head = null;
    this.tail= null;
    this.length = 0;
  }
  AddToHead(value){
    this.head = new Node(value, this.head);
  }
  Insert(value){
    let nodeInserted = new Node(value);
    if (this.head === null){
      this.head = nodeInserted;
      this.tail = nodeInserted;
    }
    else{
      this.tail.next = nodeInserted;
      this.tail = nodeInserted;
    }
    this.length++;
  }
  Include(value){
    let nodeIncludded = this.head;
    while (nodeIncludded){
      if(nodeIncludded.value === value){
        return true;
      }
      return false;
    }
  }
  ToString(){
    let nodeIncludded = this.head;
    let string = "";
    while (nodeIncludded){
      string += nodeIncludded.value+" -> ";
      nodeIncludded = nodeIncludded.next;
    }
    return string;
  }
  Print(){
    let nodeIncludded = this.head;
    while (nodeIncludded){
      console.log(nodeIncludded.value);
      nodeIncludded= nodeIncludded.next;
    }
  }
  append(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      while (tempNode.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    if (k > count) {
      return 'Exception';
    }
    if (k < 1) {
      return 'Exception';
    }
    currentNode = this.head;
    for (let i = 0; i < count - k; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  zipLists(list1,list2){
    let result = new LinkedList();
    let current1=list1.head;
    let current2=list2.head;
    while(current1 !== null || current2 !== null)
    {
      if(current1 !== null){
        result.append(current1.value);
        current1=current1.next;
      }
      if(current2 !== null){
        result.append(current2.value);
        current2=current2.next;
      }
    }
    return result;
  }
}

let newLinkedList = new LinkedList();
newLinkedList.Print();
// exports
module.exports = LinkedList;
