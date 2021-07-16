class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value, null);
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) index = 1;
    const node = new Node(value, null);
    let current = 1;
    let currentNode = this.head;
    while (current !== index) {
      currentNode = currentNode.next;
      current++;
    }
    node.next = (currentNode && currentNode.next) || null;
    currentNode.next = node;
    return this;
  }

  deleteByValue(value) {
    let currentNode = this.head;
    let previousNode = null;

    const truthy = true;
    while (truthy) {
      if (currentNode.value === value) {
        if (!previousNode) {
          this.head = currentNode.next;
          currentNode = null;
        } else {
          previousNode.next = currentNode.next;
          currentNode = null;
        }
        return this;
      }
      if (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  traverseToIndex(index) {
    if (index === 0) index = 1;
    let current = 1;
    let currentNode = this.head;
    while (current !== index) {
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode : null;
  }

  delete(index) {
    const node = this.traverseToIndex(index - 1);
    let unwanted = node.next;
    node.next = unwanted.next;
  }

  // reverse(){
  //   let currentNode = this.head;
  //   let previousNode = currentNode;
  //   while(currentNode.next){
  //     currentNode = currentNode.next;
  //     currentNode.next = previousNode;
  //   }

  // }

  printAllNodes() {
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList(10);
// console.log(list);
list.append(20);
// console.log(list);
list.prepend(30);
// console.log(list);
list.insert(1, 100);
// console.log(list)
list.insert(0, 150);
list.insert(5, 1);
list.delete(1);
// list.delete(150);
list.printAllNodes();

export default LinkedList;
