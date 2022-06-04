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
}
let newLinkedList = new LinkedList();
newLinkedList.Print();
// exports
module.exports = LinkedList;
