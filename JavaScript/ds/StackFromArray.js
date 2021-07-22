class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  pop() {
    return this.data.pop();
  }

  lookup(index) {
    let lookupArr = [];
    for (let i = 0; i < index; i++) {
      lookupArr.push(this.data.pop());
    }
    let res = this.data[this.data.length - 1];
    this.data.push(...lookupArr);
    return res;
  }
}

const s = new Stack();

s.push(10);
s.push(11);
s.push(12);
s.push(13);

console.log(s.pop());

console.log(s.peek());

console.log(s.lookup(1));
console.log(s);

export default Stack;
