/*
Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      let c = Math.sqrt((a*a) + (b*b));
      if (Math.floor(c) === c && c > b && (a + b + c === n)) {
        return a * b * c;
      }
    }
  }
  return true;
}

console.log(specialPythagoreanTriplet(1000));