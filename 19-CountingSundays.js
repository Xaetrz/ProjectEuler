/*
Problem 19: Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function countingSundays(firstYear, lastYear) {
  let weekdayOfCurMonth = days.Monday; // Start with January 1, 1900, which was a Monday
  let numSundays = 0;
  
  // Start counting Sundays falling on the first of the month starting from 1900, where we know the first day of 1900 is a Monday
  for (let year = 1900; year <= lastYear; year++) {
    for (let monthIdx = 0; monthIdx < months.length; monthIdx++) {
      // Check if current first day of the month is a Sunday
      if (weekdayOfCurMonth === days.Sunday && year >= firstYear) {
        numSundays++;
      }

      // Adjust to the first day of the next month by adding the current month's days
      let month = months[monthIdx];
      let daysInMonth = monthCounts.days(month, year);
      weekdayOfCurMonth = (weekdayOfCurMonth + daysInMonth) % 7;
    }
  }

  return numSundays;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const monthCounts = {
  "January": 31,
  februaryDaysNonLeap: 28,
  februaryDaysLeap: 29,
  februaryDays: (year) => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? monthCounts.februaryDaysLeap: monthCounts.februaryDaysNonLeap,
  "March": 31,
  "April": 30,
  "May": 31,
  "June": 30,
  "July": 31,
  "August": 31,
  "September": 30,
  "October": 31,
  "November": 30,
  "December": 31,
  days: (month, year) => (month === "February") ? monthCounts.februaryDays(year): monthCounts[month]
}

const days = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

console.log(countingSundays(1901, 2000));