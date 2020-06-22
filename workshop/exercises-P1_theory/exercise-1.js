// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
let answer= square(decrement(square(decrement(3))));
console.log(answer);
// 1-2
let answer2=decrement(decrement(square(square(3))));
console.log(answer2);
// 1-3
let answer3=duplicateString(reverseString('hello'));
console.log(answer3);
// 1-4
let answer4=reverseString(duplicateString(duplicateString('foo')));
console.log(answer4);