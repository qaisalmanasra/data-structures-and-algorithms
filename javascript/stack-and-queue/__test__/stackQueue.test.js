'use strict';

const Stack = require('../stack/lib/stack');
const Queue = require('../queue/lib/queue');

describe('Stack and Queue', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.pop()).toBe(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
  });
  it('Can successfully enqueue into a Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.rear.value).toBe(1);
  });

  it('Can successfully enqueue multiple values into a Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.rear.value).toBe(1);
    newQueue.enqueue(2);
    expect(newQueue.rear.value).toBe(2);
  });

  it('Can successfully dequeue out of a Queue the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toBe(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBe(null);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.peek()).toBe(1);
  });

  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();
    expect(newQueue.front).toBe(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queue();
    expect(newQueue.dequeue()).toBe(null);
    expect(newQueue.peek()).toBe(null);
  });
});
