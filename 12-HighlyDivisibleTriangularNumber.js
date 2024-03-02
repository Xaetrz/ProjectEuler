/*
Problem 12: Highly divisible triangular number
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
Let us list the factors of the first seven triangle numbers:

1: 1
3: 1, 3
6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over n divisors?
*/

function divisibleTriangleNumber(n) {
  let curTriNum = 0;
  let i = 1;
  while (true) {
    curTriNum += i;
    let divisors = getNumDivisors(curTriNum);
    if (divisors >= n) return curTriNum;
    i++;
  }
}

// O(sqrt(n))
function getNumDivisors(n) {
  if (n === 1) return 1;
  let numDivisors = 0;
  let sqrtN = Math.sqrt(n);

  // Every divisor is part of a pair (ex. n = 28: 1 * 28, 2 * 14, 4 * 7) with exception of perfect squres, 
  // so only need to check divisors up to sqrt(n) and add 2 for each divisor. 
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) numDivisors += 2;
  }

  if (sqrtN * sqrtN === n) numDivisors--; // Subtract 1 for perfect squares (ex. 49 => 1, 7, 49; avoid counting 7 twice)
  return numDivisors;
}

const startTime = new Date().getTime();
const answer = divisibleTriangleNumber(500);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);