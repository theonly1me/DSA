import LinkedList from './LinkedList.js';

class Stack {
  constructor(value) {
    this.data = new LinkedList(value);
  }

  push(value) {
    this.data.append(value);
  }

  pop() {
    const node = this.data.traverseToIndex(this.data.length);
    return this.data.delete(node);
  }

  peek() {
    return this.data.traverseToIndex(this.data.length).value;
  }

  lookup(index) {
    return this.data.traverseToIndex(index).value;
  }
}

const stk = new Stack(10);
stk.push(20);
stk.push(30);
stk.pop();
console.log(stk.lookup(1));
stk.push(30);
console.log(stk.peek());

export default Stack;
