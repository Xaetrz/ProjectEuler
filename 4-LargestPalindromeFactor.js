/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
  let low = Math.pow(10, n - 1);
  let high = (low * 10) - 1
  let largestPalindrome = null;

  for (let operand1 = low; operand1 <= high; operand1++) {
    for (let operand2 = low; operand2 <= high; operand2++) {
      let product = operand1 * operand2;
      if (product > largestPalindrome && isPalindrome(product)) largestPalindrome = product;
    }
  }
  return largestPalindrome;
}

function isPalindrome(number) {
  let numArr = String(number);
  for (let i = 0; i < numArr.length / 2; i++) {
    if (numArr[i] !== numArr[numArr.length - i - 1]) return false;
  }
  return true;
}

console.log(largestPalindromeProduct(3));