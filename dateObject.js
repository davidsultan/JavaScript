// date object: represents a moment in time 
//              since epoch (reference point)

date = new Date(0);// reference point
date = new Date();// current time 
date = new Date(2022, 3, 4, 18, 1, 2, 3);
date = new Date("April 20, 2022 16:20:01:02");

let year = date.getFullYear();
let month = date.getMonth();
let dayOfweek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliSeconds();

console.log(year);
console.log(month);
console.log(dayOfweek);
console.log(dayOfMonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);

date.setFullYear(2023);
console.log(date);
