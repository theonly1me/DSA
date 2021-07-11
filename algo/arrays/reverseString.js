const reverseString = sentence => {
  return sentence.split('').reduce((acc, cur) => cur + acc, '');
};

console.log(reverseString('The weather looks great today!'));

export default reverseString;
