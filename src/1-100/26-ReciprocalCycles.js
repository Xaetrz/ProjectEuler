/*
Problem 26: Reciprocal cycles
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

function reciprocalCycles(n) {
  let maxCycle = 0;
  let denWithMaxCycle = null;
  for (let i = 2; i < n; i++) {
    let cycle = cycleLength(1, i);
    if (cycle > maxCycle) {
      maxCycle = cycle;
      denWithMaxCycle = i;
    }
  }
  return denWithMaxCycle;
}

// Calculate the cycle length at the same time as decimal expansion. Main observation is that the end of the cycle has been found when the remainder of the next digit has already been seen. 
function cycleLength(num, den) {
  const hash = new Map();
  let rem = num;
  let curDigit = 0;
  do {
    hash.set(rem, curDigit);
    rem = (rem * 10) % den;
    curDigit++;
  } while (hash.get(rem) === undefined);
  return curDigit - hash.get(rem);
}

// Testing function for getting a full decimal expansion of num/den
function getDecimalExpansion(num, den, numDigits = 1000) {
  let nArr = [];
  let rem = (num % den) * 10;
  for (let i = 1; i <= numDigits; i++) {
    nArr.push(Math.floor(rem / den));
    rem = (rem % den) * 10;
  }
  return nArr;
}

const startTime = new Date().getTime();
const answer = reciprocalCycles(1000);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);