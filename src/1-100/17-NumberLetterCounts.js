/*
Problem 17: Number letter counts
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

function numberLetterCounts(limit) {
  let word = "";
  for (let i = 1; i <= limit; i++) word += numToWord(i);
  return word.replace(/-|\s/g, "").length;
}


// Super-overkill, generalized function that converts a number to a word. Wanted to figure out how to do this without hard-coded if-then branches
function numToWord(n) {
  let word = "";
  
  // Iterate over array to maintain greatest-to-least order
  for (let numSectionIdx in numSectionIterator) {
    let numSection = numSectionIterator[numSectionIdx]; 
    if (n >= numSection.num) {
      // Chop off all digits to the right of the num section slice (e.g. 123,456,789; to chop off 789, divide by 1000 and floor)
      let numSectionLeftSlice = Math.floor(n / numSection.num);
      // Chop off all digits to the left of the num section slice (e.g. now have 123,456 from example above, convert to string and slice off last 3 or less digits)
      let numSectionSliceStr = numSectionLeftSlice.toString().slice(-3);
      let numSectionSlice = Number(numSectionSliceStr);

      let tensAndOnes = Number(numSectionSliceStr.slice(-2));
      let tens = Number(numSectionSliceStr.slice(-2, numSectionSliceStr.length - 1)) * 10;
      let ones = Number(numSectionSliceStr.slice(-1));

      if (numSectionSlice >= 100) {
        let hundredsDigit = Number(numSectionSliceStr.slice(0, 1));
        word += " " + tensDictionary[hundredsDigit] + " hundred";
      }

      if (numSection.name === "" && tensAndOnes > 0 && word) word += " and"; // British Usage, only add for final section

      // Handle teens, single-digit ones, and multiples of 10
      if ((tensAndOnes > 0) && (tensAndOnes < 20 || numSectionSlice % 10 === 0)) {
        word += " " + tensDictionary[tensAndOnes];
      }
      else if (ones > 0) {
        word += " " + tensDictionary[tens] + "-" + tensDictionary[ones];
      }

      if (numSectionSlice > 0) word += " " + numSection.name;
    }
  }

  return word.trim();
}

let tensDictionary = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
}

let numSectionIterator = [
  // Can add as many "sections" as needed, just need to maintain greatest-to-least order
  { name: "quadrillion", num: 1000000000000000},
  { name: "trillion",    num: 1000000000000},
  { name: "billion",     num: 1000000000},
  { name: "million",     num: 1000000},
  { name: "thousand",    num: 1000},
  { name: "",            num: 1}  // Numbers between 1 and 999, no name is added to the end
]

const startTime = new Date().getTime();
const answer = numberLetterCounts(150);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);