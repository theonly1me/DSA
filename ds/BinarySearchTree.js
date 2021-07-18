class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    if (!this.root) this.root = new Node(value);
    else {
      let currentNode = this.root;
      while (currentNode && currentNode.value) {
        if (currentNode.value >= value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(value);
            break;
          }
        } else {
          if (currentNode.right) currentNode = currentNode.right;
          else {
            currentNode.right = new Node(value);
            break;
          }
        }
      }
      currentNode = new Node(value);
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode && currentNode.value) {
      if (currentNode.value === value) return currentNode;
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else currentNode = currentNode.left;
    }
    return null;
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;
    let right = false;
    while (currentNode && value !== currentNode.value) {
      parentNode = currentNode;
      if (value > currentNode.value) {
        currentNode = currentNode.right;
        right = true;
      } else {
        right = false;
        currentNode = currentNode.left;
      }
    }
    if (currentNode.right) {
      let unwantedNode = currentNode;
      currentNode = currentNode.right;
      if (currentNode.left) {
        let rightNode = currentNode;
        currentNode = currentNode.left;
        currentNode.left = unwantedNode.left;
        currentNode.right = rightNode;
        if (right) parentNode.right = currentNode;
        else parentNode.left = currentNode;
        unwantedNode.left = null;
        unwantedNode.right = null;
        unwantedNode.value = null;
        unwantedNode = null;
      } else {
        currentNode.left = unwantedNode.left;
        // currentNode.right = unwantedNode.right.right;
        if (right) parentNode.right = currentNode;
        else parentNode.left = currentNode;
        unwantedNode.left = null;
        unwantedNode.right = null;
        unwantedNode.value = null;
        unwantedNode = null;
      }
    } else {
      currentNode = null;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(170));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

export default BinarySearchTree;
