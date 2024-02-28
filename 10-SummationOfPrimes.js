/*
Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

function primeSummation(n) {
  let primeSum = 0;
  for (let i = 1; i < n; i ++) { // Could skip 1 but what's the fun in that?
    if (isPrime(i)) primeSum += i;
  }
  return primeSum;
}

function isPrime(number) {
  // Some additional validation
  if (number <= 1) return false;
  else if (number === 2) return true;
  else if (number % 2 === 0) return false;

  for (let cur = 2; number >= cur * cur; cur++) {
    if (number % cur === 0) return false;
  }
  return true;
}

console.log(primeSummation(2000000));