/*
Problem 27: Quadratic primes
Euler discovered the remarkable quadratic formula:

n2+n+41
 
It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39
 . However, when  n=40,402+40+41=40(40+1)+41
  is divisible by 41, and certainly when  n=41,412+41+41
  is clearly divisible by 41.

The incredible formula  n2−79n+1601
  was discovered, which produces 80 primes for the consecutive values  0≤n≤79
 . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b
 , where  |a|<range
  and  |b|≤range
 
where  |n|
  is the modulus/absolute value of  n
 
e.g.  |11|=11
  and  |−4|=4
 
Find the product of the coefficients,  a
  and  b
 , for the quadratic expression that produces the maximum number of primes for consecutive values of  n
 , starting with  n=0
 .
 */

 function quadraticPrimes(range) {
  // Performance observations: b must be prime for n = 0 to result in a prime number. Plus, consequently, b must also be an odd number or |2|.
  let bIterator = [];
  for (let b = (-1 * range); b <= range; b++) {
    if (isPrime(b)) bIterator.push(b);
  }

  let maxConsecPrimes = 0;
  let maxAB = [null, null];

  for (let a = -1 * range; a <= range; a++) {
    for (let b of bIterator) {
      let numConsecPrimes = 0;
      for (let n = 0; isPrime((n * n) + (a * n) + b); n++) {
        numConsecPrimes++;
      }
      if (maxConsecPrimes < numConsecPrimes) {
        maxConsecPrimes = numConsecPrimes;
        maxAB = [a, b];
      }
      maxConsecPrimes = Math.max(maxConsecPrimes, numConsecPrimes);
    }
  }

  return maxAB[0] * maxAB[1];
}

// This is a fixed version of an earlier solution's isPrime function. Now properly handles 1, 2, and negative numbers
function isPrime(number) {
  let nAbs = Math.abs(number);
  if (Math.abs(nAbs) === 2 ) return true;
  if (nAbs % 2 === 0 || Math.abs(nAbs) === 1) return false;

  for (let cur = 2; nAbs >= cur * cur; cur++) {
    if (nAbs % cur === 0) return false;
  }
  return true;
}

const startTime = new Date().getTime();
const answer = quadraticPrimes(1000);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);