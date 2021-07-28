const findIntegers = n => {
  let count = 0;
  const nums = [];
  for (let i = 0; i <= n; i++) {
    nums.push(i.toString(2));
  }
  nums.forEach(el => {
    if (!el.includes('11')) count++;
  });
  return count;
};

console.log(findIntegers(5));

export default findIntegers;
