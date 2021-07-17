import LinkedList from './LinkedList.js';

class Queue {
  constructor(value) {
    this.data = new LinkedList(value);
  }
  insert(value) {
    this.data.prepend(value);
  }
  remove() {
    this.data.delete();
  }
  peek() {
    return this.data.head;
  }
}

const q = new Queue(10);
q.insert(20);
q.insert(30);
q.remove();
console.log(q.data.printAllNodes());

export default Queue;
