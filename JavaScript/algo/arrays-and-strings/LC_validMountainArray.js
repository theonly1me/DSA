/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let climbing = true;
  for (let i = 1; i < arr.length; i++) {
    if (climbing) {
      if (arr[i - 1] >= arr[i]) return false;
      if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) climbing = false;
    } else if (!climbing) {
      if (arr[i - 1] <= arr[i]) return false;
    }
  }
  return !climbing;
};

export default validMountainArray;
