/*
Problem 22: Names scores
Using names, an array defined in the background containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the array?
*/

function namesScores(arr) {
  let nameScoreTotal = 0;
  arr.sort();
  
  for (let nameIdx = 0; nameIdx < arr.length; nameIdx++) {
    let nameScore = 0;
    let nameArr = arr[nameIdx].split('');
    for (let char of nameArr) {
      nameScore += char.charCodeAt() - 64; // Uppercase alphabet characters in ASCII start at 65 for 'A' 
    }
    nameScore *= (nameIdx + 1); // nameIdx starts at 0, alphabetical position in array starts at 1
    nameScoreTotal += nameScore;
  }
  return nameScoreTotal;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

const startTime = new Date().getTime();
const answer = namesScores(test1);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);