/*
Problem 20: Factorial digit sum
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!


*/

function sumFactorialDigits(n) {
  let factN = factorial(n);
  return factN.toString().split('').reduce((acc, cur) => Number(acc) + Number(cur));
}

function factorial(n) {
  if (n <= 1) return BigInt(1);
  return BigInt(n) * factorial(n - 1);
}

const startTime = new Date().getTime();
const answer = sumFactorialDigits(100);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);
