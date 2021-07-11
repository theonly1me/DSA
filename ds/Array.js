class ArrayClass {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(el) {
    this.data[this.length] = el;
    this.length++;
  }

  pop() {
    const el = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return el;
  }

  delete(index) {
    const item = this.data[index];
    this.reindex(index);
    return item;
  }

  reindex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new ArrayClass();

arr.push(2);
arr.push('Hello');
arr.push('Bye');
// console.log(arr.pop());
arr.delete(1);
console.log(arr.data);

export default ArrayClass;
