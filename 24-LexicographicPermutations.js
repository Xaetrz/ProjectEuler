/*
Problem 24: Lexicographic permutations
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// Very efficient, mathematical implementation based on factorials. O(i), where i is number of digits 
// Explanation and code derived from https://stackoverflow.com/questions/37172808/i-want-to-make-my-solution-for-project-euler-24-more-efficient:
// "It's based on factorials and the principle is really simple. Let's say you have digits 1234 which results to 4! permutations. 
// 3! first permutations start with 1 so you can get the index of first digit simply by dividing permutation number with 3!. 
// Then remove the digit from available digits and add it to the result. For the following digits use remainder of previous division as permutation number."
function lexicographicPermutations(n) {
  let digitsList = Array(10).fill().map((_, i) => i);
  let perm = [];

  for (let remDigitNum = digitsList.length - 1 ; remDigitNum >= 0; remDigitNum--) {
    let index = Math.floor(n / factorial(remDigitNum));
    n %= factorial(remDigitNum);
    perm.push(digitsList[index]);
    digitsList = digitsList.filter((_, idx) => idx !== index);
  }

  return Number(perm.join(''));
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// My original brute force algorithm which generates a full list of permutations, sorts it, then gets the number at index n. Very inefficient
function lexicographicPermutationsBrute(n) {
  let permList = [];
  let digitsList = Array(10).fill().map((_, i) => i.toString());
  getAllPermutations(permList, digitsList);
  permList.sort();
  return Number(permList[n]);
}

function getAllPermutations(permList, digitsList, perm = '') {
  if (digitsList.length === 0) 
    return permList.push(perm);;

  for (let digit of digitsList) {
    let nextdigitsList = digitsList.filter(val => val !== digit);
    getAllPermutations(permList, nextdigitsList, perm + digit);
  }
}

const startTime = new Date().getTime();
const answer = lexicographicPermutations(999999);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);

