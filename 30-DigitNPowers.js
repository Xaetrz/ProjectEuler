/*
Problem 30: Digit n powers
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.
*/

function digitnPowers(n) {
  // Observation: The max power from each digit is 9^n. Ideally, we can determine an upper limit to the number of potential sums to detect.
  // Since we're only adding together each digit power, there's a limit to the number of digits that the sum can have before it rapidly outpaces the summation of each digit power.
  // From induction, a max sum of digitnPowers appears to be 9^(n+1).

  let maxNum = Math.pow(9, n + 1);
  const sumDigits = []; // Not needed for solution, used for testing
  let totalSum = 0;
  
  // Note: Skipping 0 and 1 since they wouldn't be the result of summation. This loop would otherwise include them if it started at 0.
  for (let num = 2; num < maxNum; num++) {
    let numArr = Array.from(String(num), Number);
    let sum = numArr.reduce((acc, cur) => acc + Math.pow(cur, n), 0);

    // Original loop. Replaced with Array.reduce. Reminded me of the importance of the InitialValue parameter of reduce. Without it set to 0, acc starts with first value in array, which hasn't been operated on yet with Math.pow.
    // for (let digitIdx = 0; digitIdx < numArr.length; digitIdx++) {
    //   sum += Math.pow(numArr[digitIdx], n);
    // }
    if (num === sum) {
      totalSum += num;
      sumDigits.push(num);
    }
  }

  return totalSum;
}

const startTime = new Date().getTime();
const answer = digitnPowers(3);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);