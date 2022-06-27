'use strict';
const Queue = require('./lib/queue');
const newQueue = new Queue();

newQueue.enqueue('cat');
newQueue.enqueue('dog');

console.log(newQueue.peek('cat'));
console.log(newQueue.peek('dog'));
