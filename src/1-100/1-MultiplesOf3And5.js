/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3Or5(number) {
  let sum = 0;
  for (let multiple3 = 3; multiple3 < number; multiple3 += 3) {
    sum += multiple3;
  }
  for (let multiple5 = 5; multiple5 < number; multiple5 += 5) {
    if (multiple5 % 3 !== 0) sum += multiple5;  // Don't double-count multiples of 3 and 5
  }
  return sum;
}

console.log(multiplesOf3Or5(1000));