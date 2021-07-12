'use strict';

const mergeSortedArrays = (arr1, arr2) => {
  const res = [];
  let i = 0,
    j = 0;

  while (i < arr1.length + arr2.length) {
    if (res.length === arr1.length + arr2.length) break;

    if (arr1[i] === undefined && arr2[j] !== undefined) {
      res.push(...arr2.slice(j));
      break;
    }
    if (arr2[j] === undefined && arr1[i] !== undefined) {
      res.push(...arr1.slice(i));
      break;
    }

    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      res.push(arr2[j]);
      j++;
    }
  }

  return res;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

export default mergeSortedArrays;
