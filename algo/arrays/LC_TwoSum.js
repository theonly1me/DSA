'use strict';

//Better Solution
const twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  const truth = true;
  let i = 0,
    j = nums.length - 1;

  while (truth) {
    if (i !== j && nums[i] + nums[j] === target) {
      return [i, j];
    }

    if (i !== nums.length - 2) {
      i++;
    } else {
      j--;
      nums.pop();
      i = 0;
    }
  }
};

//A Second approach
// const twoSum = (n, t) => {
//   let i = 0;
//   while (true) {
//     if (n.length === 2) return [0, 1];
//     let diff = t - n[i];
//     if (n.includes(diff) && i !== n.indexOf(diff)) {
//       return [i, n.indexOf(diff)];
//     } else i++;
//   }
// };

export default twoSum;
