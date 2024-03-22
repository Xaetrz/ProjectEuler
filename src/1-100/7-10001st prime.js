/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) {
  let primeArr = [2];
  for (let i = 3; primeArr.length < n; i += 2) { // Skip even numbers past 2
    if (isPrime(i)) primeArr.push(i);
  }
  return primeArr.pop();
}

function isPrime(number) {
  if (number % 2 === 0) return false;
  for (let cur = 2; number >= cur * cur; cur++) {
    if (number % cur === 0) return false;
  }
  return true;
}

console.log(nthPrime(10001));