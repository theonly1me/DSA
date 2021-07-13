const maxSubArray = function (nums) {
  let sum = 0,
    temp = 0,
    allNegative = false,
    negativeMax = -Infinity;

  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (el >= 0) break;
    if (negativeMax < el) {
      negativeMax = el;
    }
    if (i === nums.length - 1) allNegative = true;
  }

  if (allNegative) return negativeMax;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    if (temp >= 0 && sum < temp) sum = temp;
    else if (temp < 0) {
      temp = 0;
    }
  }
  return sum;
};

export default maxSubArray;
