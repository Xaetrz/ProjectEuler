/*
Problem 34: Digit factorials
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function digitFactorial() {
  let limit: number = 99999;
  let sum: number = 0;
  let numbers: number[] = [];

  for (let i = 3; i <= limit; i++) {
    let factSum = i.toString().split('').reduce((acc, cur) => acc + factorial(Number(cur)), 0);
    if (factSum === i) {
      numbers.push(i);
      sum += i;
    }
  }
  return { sum, numbers };
}

function factorial(n: number): number {
  // Just playing around with Javascript stuff
  return Array(n).fill(0).reduce((acc, _, i) => acc * (i + 1), 1);
}

const startTime = new Date().getTime();
const answer = digitFactorial();
const endTime = new Date().getTime();

console.log(`Answer: ${JSON.stringify(answer)} (Time taken: ${endTime - startTime} ms)`);