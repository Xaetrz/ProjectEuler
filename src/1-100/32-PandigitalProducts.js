/*
Problem 32: Pandigital products
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.

Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function pandigitalProducts(n) {
  const productSet = new Set();
  const digits = [...Array(n).fill(0).map((_, i) => i + 1)];
  pandigitalProductsRecurse(digits, productSet);
  return Array.from(productSet).reduce((acc, cur) => acc + cur, 0);
}


// Use recursion to generate every combination of digits between 1 and n. On base case, loop through generated number and check for pandigital products to add to productSet
function pandigitalProductsRecurse(digits, productSet, numStr = '') {
  if (digits.length === 0) {
    for (let i = 1; i <= numStr.length - 2; i++) {
      for (let j = i + 1; j <= numStr.length - 1; j++) {
        const multiplicand = Number(numStr.slice(0, i));
        const multiplier = Number(numStr.slice(i, j));
        const product = Number(numStr.slice(j));
        if (multiplicand * multiplier === product) 
          productSet.add(product);
      }
    }
  }

  for (let digitIdx = 0; digitIdx <= digits.length - 1; digitIdx++) {
    let nextNums = digits.filter((_, i) => i !== digitIdx);
    pandigitalProductsRecurse(nextNums, productSet, numStr + digits[digitIdx]);
  }
}

const startTime = new Date().getTime();
const answer = pandigitalProducts(8);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);

