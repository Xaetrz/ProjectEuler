/*
Problem 33: Digit cancelling fractions
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

function digitCancellingFractions() {
  let nontrivNumProduct: number = 1;
  let nontrivDenProduct: number = 1;

  for (let numerator: number = 10; numerator <= 99; numerator++) {
    let numStr: string = numerator.toString();
    for (let denominator: number = numerator; denominator <= 99; denominator++) {
      if (numerator === denominator) continue;
      let denStr: string = denominator.toString();
      let num0: number = Number(numStr[0]);
      let num1: number = Number(numStr[1]);
      let den0: number = Number(denStr[0]);
      let den1: number = Number(denStr[1]);

      if ((num0 === den1 && numerator / denominator === num1 / den0)
       || (num1 === den0 && numerator / denominator === num0 / den1)) {
        nontrivNumProduct *= numerator;
        nontrivDenProduct *= denominator;
      }
    }
  }

  const gcd: number = getGCD(nontrivNumProduct, nontrivDenProduct);
  return nontrivDenProduct / gcd;
}

// function reduce(num: number, den: number): Array<number> { 
//   let gcd: number = getGCD(num, den);
//   return [num / gcd, den / gcd];
// } 

// Dead simple way of getting greatest common divisor. Pulled from https://www.geeksforgeeks.org/reduce-a-fraction-to-its-simplest-form-by-using-javascript/
function getGCD(num: number, den: number): number {
  return den ? getGCD(den, num % den) : num;
}

console.log(digitCancellingFractions());

