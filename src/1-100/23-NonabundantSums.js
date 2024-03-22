/*
Problem 23: Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
*/

function sumOfNonAbundantNumbers(n) {
  const abundantNumMap = getAllAbundantNumbers(n);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    let hasAbundantSum = false;
    for (let abundantNum of abundantNumMap.keys()) {
      if (abundantNumMap.get(i - abundantNum)) {
        hasAbundantSum = true;
        break;
      }
    }
    if (!hasAbundantSum) 
      sum += i;
  }

  return sum;
}

function getAllAbundantNumbers(n) {
  let numMap = new Map();
  for (let i = 12; i <= n; i++) {
    if (isAbundant(i)) 
      numMap.set(i, true);
  }
  return numMap;
}

function isAbundant(n) {
  const divisors = getProperDivisors(n);
  const divisorSum = divisors.reduce((acc, cur) => acc + cur);
  return (divisorSum > n);
}

function getProperDivisors(n) {
  let divisors = [1];
  if (n === 1) return divisors;

  let sqrtN = Math.sqrt(n);

  // Every divisor is part of a pair (ex. n = 28: 1 * 28, 2 * 14, 4 * 7) with exception of perfect squres, 
  // so only need to check divisors up to sqrt(n) and get second divisor by dividing n by i. 
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (sqrtN !== i) divisors.push(n / i); // Perfect squares only need to be added once
    }
  }

  return divisors;
}

const startTime = new Date().getTime();
const answer = sumOfNonAbundantNumbers(28123);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);
