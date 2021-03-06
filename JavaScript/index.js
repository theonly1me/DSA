'use strict';

import http from 'http';
// import ArrayClass from './ds/Array.js';
// import reverseString from './algo/arrays/reverseString.js';
// import mergeSortedArrays from './algo/arrays/mergeSortedArrays.js';
// import LinkedList from './ds/LinkedList.js';
// import DoublyLinkedList from './ds/DoublyLinkedList.js';
// import validMountainArray from './algo/arrays/LC_validMountainArray.js';
// import BinarySearchTree from './ds/BinarySearchTree.js';
// import findIntegers from './algo/arrays/LC_nonNegativeIntsWithoutConsequtiveOnes.js';

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
