class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value, null, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value, null, null);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    node.previous = currentNode;
    currentNode.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value, this.head, null);
    let currentHead = this.head;
    currentHead.previous = node;
    node.next = currentHead;
    this.head = node;
    this.length++;
    return this;
  }
}

let doubleList = new DoublyLinkedList(10);
doubleList.prepend(5);
doubleList.append(15);
console.log(doubleList);

export default DoublyLinkedList;
