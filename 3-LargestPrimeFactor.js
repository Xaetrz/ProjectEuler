/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
  let largestPrime = 1;
  let memo = {};
  memo[1] = true;
  memo[2] = true;

  if (isPrime(number, memo)) return number;

  for (let cur = 1; number > cur * cur; cur++) {
    // FYI: In retrospect, the memoization isn't useful in this problem since we're only checking if a number is prime when it also divides into the argument.
    if (number % cur === 0 && isPrime(cur, memo)) largestPrime = cur; 
  }
  return largestPrime;
}

function isPrime(number, memo) {
  if (memo[number]) return memo[number];
  else if (number % 2 === 0) {
    memo[number] = false;
    return false;
  }
  for (let cur = 2; number > cur * cur; cur++) {
    if (number % cur === 0) {
      memo[cur] = false;
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(13195));