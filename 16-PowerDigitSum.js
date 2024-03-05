/*
Problem 16: Power digit sum
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?
*/

function powerDigitSum(exponent) {

  const num = bigPower(2, exponent);
  return Number(num.toString().split('').reduce((acc, cur) => (BigInt(acc) + BigInt(cur))));
}

// Math.pow uses Number so it doesn't handle very large integers. So, creating my own power function using BigInt
function bigPower(num, exponent) {
  let result = BigInt(num);
  for (let i = 1; i < exponent; i++) {
    result *= BigInt(num);
  }
  return result;
}

const startTime = new Date().getTime();
const answer = powerDigitSum(15);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);