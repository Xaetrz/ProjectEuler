/*
Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.
*/

function sumAmicableNum(n) {
  
  return n;
}

function getSumDivisors(n) {
  if (n === 1) return 1;
  let divisors = [];
  let sqrtN = Math.sqrt(n);

  // Every divisor is part of a pair (ex. n = 28: 1 * 28, 2 * 14, 4 * 7) with exception of perfect squres, 
  // so only need to check divisors up to sqrt(n) and add second of pair by dividing into n. 
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (sqrtN !== i) divisors.push(n / i);  // Add second divisor. Don't double-count perfect squares
    }
  }

  return divisors.reduce((acc, cur) => acc + cur); // Alternate, slightly-better performing solution: add divisors as we go in the loop
}

getSumDivisors(10000);