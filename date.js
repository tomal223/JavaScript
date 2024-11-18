const d = new Date();

const d2 = new Date("2022-03-25");

console.log(d);

console.log(d2);

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// getFullYear() 	Get year as a four digit number (yyyy)
// getMonth() 	Get month as a number (0-11)
// getDate() 	Get day as a number (1-31)
// getDay() 	Get weekday as a number (0-6)
// getHours() 	Get hour (0-23)
// getMinutes() 	Get minute (0-59)
// getSeconds() 	Get second (0-59)
// getMilliseconds() 	Get millisecond (0-999)
// getTime() 	Get time (milliseconds since January 1, 1970)


const da = new Date("October 13, 2014 11:13:00"); 
console.log(da);

let msec = Date.parse("March 21, 2012");
const dd = new Date(msec);
console.log(dd);

const d3 = new Date("2015-3-25"); 
console.log(d3);

const d4 = new Date();
console.log(d4.toUTCString());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d5 = new Date("2021-03-25");
let month = months[d5.getMonth()];

const d6 = new Date("2021-03-25");
console.log(d6.getHours());



// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);

console.log(years);
