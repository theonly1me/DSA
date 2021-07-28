/**
 * Initialize your data structure here.
 */

class Stack {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  push(val) {
    this.data.push(val);
  }

  pop() {
    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

var MyQueue = function () {
  this.s1 = new Stack();
  this.s2 = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.s1.size() > 1) this.s2.push(this.s1.pop());
  const el = this.s1.pop();
  while (!this.s2.isEmpty()) this.s1.push(this.s2.pop());
  return el;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.s1.size() > 1) this.s2.push(this.s1.pop());
  const el = this.s1.peek();
  while (!this.s2.isEmpty()) this.s1.push(this.s2.pop());
  return el;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
//  MyQueue myQueue = new MyQueue();
const myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false
