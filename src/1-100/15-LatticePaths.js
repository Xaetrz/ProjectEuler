/*
Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a given gridSize?
*/

function latticePaths(gridSize) {

  return getPathCount(0, 0, gridSize)
}

// Simple recursive solution. On its own would become rapidly too inefficient as gridSize increases, but uses memoize function to store past results.
const getPathCount = memoize(function(x, y, gridSize) {
  if (x === gridSize && y === gridSize) return 1;
  
  let pathCount = 0;
  if (x < gridSize) pathCount += getPathCount(x + 1, y, gridSize);
  if (y < gridSize) pathCount += getPathCount(x, y + 1, gridSize);
  return pathCount;
});

// Generic three-argument memoize function
function memoize(fn) {
  const cache = {};
  
  return function (arg1, arg2, arg3) {
    let key = arg1 + "x" + arg2 + "x" + arg3;
    if (key in cache) return cache[key];
    return cache[key] = fn(arg1, arg2, arg3);
  }
}

// Also solved using the binomial coefficient (combinatorics/discrete math) where (n + n)! / (n!)^2
function latticePathsDiscrete(n) {
  let factorialN = factorial(n);
  return factorial(n + n) / (factorialN * factorialN);
}

// Basic factorial function, ripped
function factorial(num) {
    if(num<0)
     return "Undefined";
    var fact=1;
    for(var i=num;i>1;i--)
      fact*=i;
    return BigInt(fact);
 }


let startTime = new Date().getTime();
let answer = latticePaths(20);
let endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken of latticePaths: ${endTime - startTime} ms)`);

startTime = new Date().getTime();
answer = latticePathsDiscrete(20);
endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken of latticePathsDiscrete: ${endTime - startTime} ms)`);