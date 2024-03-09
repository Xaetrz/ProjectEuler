/*
Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.
*/

function sumAmicableNum(n) {
  const sumDivisorMap = new Map();
  let amicableNumsSet = new Set();

  for (let i = 1; i <= n; i++) {
    let sumDivisors = getSumDivisors(i);
    if (sumDivisors === 1) continue;
    let numArr = sumDivisorMap.get(sumDivisors);
    if (numArr) {
      numArr.push(i);
    }
    else {
      numArr = [i];
    }
    sumDivisorMap.set(sumDivisors, numArr);
  }

  for (let i = 1; i <= n; i++) {
    let bArr = sumDivisorMap.get(i);
    for (let bIdx in bArr) {
      let b = bArr[bIdx];
      let aArr = sumDivisorMap.get(b);
      for (let aIdx in aArr) {
        let a = aArr[aIdx];
        if (a && b && a !== b && a === i) 
          amicableNumsSet.add(a, b);
      }
    }
  }

  return Array.from(amicableNumsSet).reduce((acc, cur) => acc + cur);
}

function getSumDivisors(n) {
  if (n === 1) return 1;
  let divisors = [];
  let sqrtN = Math.sqrt(n);

  // Every divisor is part of a pair (ex. n = 28: 1 * 28, 2 * 14, 4 * 7) with exception of perfect squres, 
  // so only need to check divisors up to sqrt(n) and add second of pair by dividing into n. 
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (sqrtN !== i) divisors.push(n / i);  // Add second divisor. Don't double-count perfect squares
    }
  }

  // Note: the problem description indicates that we should include 1 as a divisor but not n (despite always being a divisor of itself).
  // As such, adding only 1 here.
  divisors.push(1); 

  return divisors.reduce((acc, cur) => acc + cur); // Alternate, slightly-better performing solution: add divisors as we go in the loop
}

const startTime = new Date().getTime();
const answer = sumAmicableNum(10000);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);

//console.log(getSumDivisors(284));