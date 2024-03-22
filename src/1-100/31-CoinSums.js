/*
Problem 31: Coin sums
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can n pence be made using any number of coins?
*/

function coinSums(n) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  // Recursive solution
  //return coinSumsRecursive(n, coins);

  // Dynamic Programming solution; JS implementation of python code pulled from https://blog.dreamshire.com/project-euler-31-solution/
  // Detailed explanation: https://blog.dreamshire.com/project/dyn_prog.pdf
  const ways = Array(n + 1).fill(0);
  ways[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= n; i++) {
      ways[i] += ways[i - coin];
    }
  }
  return ways[n];
}


function coinSumsRecursive(n, coins) {
  if (n < 0 || coins.length === 0) return 0;  // Base Error Case: Breadth calculation resulted in a negative, not a valid way
  else if (n === 0) return 1;  // Base Case: Found a way
  else {
    const depth = coinSumsRecursive(n, coins.slice(0, coins.length - 1));  // Dive down into smaller coin denominations
    const breadth = coinSumsRecursive(n - coins[coins.length - 1], coins);  // Search for all ways coins go into n after subtracting the current largest denomination in coins
    return depth + breadth;
  }
}

const startTime = new Date().getTime();
const answer = coinSums(10);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);