/*
Problem 28: Number spiral diagonals
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?
*/

function spiralDiagonals(n) {
  // Observation 1: Each additional layer past the first (which is just 1) of the matrix adds 8 + the previous layer's number (2nd layer = 8, 3rd layer = 16, 4th layer = 24, etc...)
  // Observation 2 (the important one): Each diagonal in a layer can be found from the prior number by adding the number of the current layer times 2

  let sum = 1; // Start at center, which is 1
  let curNum = 1;
  for (let layer = 1; layer < n / 2; layer++) {
    for (let diagonal = 1; diagonal <= 4; diagonal++) {
      curNum += (layer * 2);
      sum += curNum;
    }
  }

  return sum;
}

const startTime = new Date().getTime();
const answer = spiralDiagonals(1001);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);