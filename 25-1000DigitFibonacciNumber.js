/*
Problem 25: 1000-digit Fibonacci number
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain n digits?
*/

function digitFibonacci(n) {
  let cur = 1;
  let prevCur = 0;
  let index = 1;

  while (cur.toString().length < n) {
    let temp = cur;
    cur += prevCur;
    prevCur = temp;
    index++;
  } 
  return index;
}

const startTime = new Date().getTime();
const answer = digitFibonacci(20);
const endTime = new Date().getTime();

console.log(`Answer: ${answer} (Time taken: ${endTime - startTime} ms)`);