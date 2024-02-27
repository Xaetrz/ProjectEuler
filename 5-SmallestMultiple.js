/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
  for (let multCheck = n; ; multCheck += n) {
    for (let mult = n - 1; mult >= 2; mult--) {
      if (mult === 2) return multCheck; // Found smallest multiple
      if (multCheck % mult !== 0) break;
    }
  }

  // Fun with Javascript solution. Probably slower than a for loop
  // let multsArr = [...Array(n).keys()].map(i => i + 1)
  // for (let multCheck = n; ; multCheck += n) {
  //   if (multsArr.every(mult => (multCheck % mult === 0))) 
  //     return multCheck;
  // }
}

console.log(smallestMult(20));