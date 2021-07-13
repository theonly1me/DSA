const firstRecurringCharacter = arr => {
  const hashMap = {};
  for (let el of arr) {
    if (hashMap[el]) return el;
    else hashMap[el] = 1;
  }
};

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));

export default firstRecurringCharacter;
