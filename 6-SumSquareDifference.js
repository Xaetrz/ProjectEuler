/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

function sumSquareDifference(n) {
  // Normal loops are boring. Likely more efficient here though, since you can do most of the work in a single loop
  let numsArr = [...Array(n).keys()].map(i => i + 1);
  let sumOfSquares = numsArr.reduce((acc, cur) => (acc + Math.pow(cur, 2)));
  let squareOfSums = Math.pow(numsArr.reduce((acc, cur) => acc + cur), 2);
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(100));