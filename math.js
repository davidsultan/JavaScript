//Math: An object that provides basic 
//      mathematics functionality and constants.

var myNum;

//myNum = Math.round(3.5);
//myNum = Math.floor(3.9);
//myNum = Math.ceil(3.1);
//myNum = Math.pow(3, 2);
//myNum = Math.sqrt(64);
//myNum = Math.abs(3.5);
//myNum = Math.min(1,5,2,4,3);
//myNum = Math.max(1,5,2,4,3);
//myNum = Math.PI;
//myNum = Math.E;

//Math.random: generates a pseudo-random between 0-1.
//             Don't use this for security purposes!

var randNum;

//randNum = Math.random();// 0-1
//randNum = Math.floor(Math.random() * 6);// 0-5
//randNum = Math.floor(Math.random() * 6) +1;// 1-6

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min +1) + min);
}

randNum = getRandomNum(1,6);
console.log(random);
randNum = getRandomNum(1,6);
console.log(random);
randNum = getRandomNum(1,6);
console.log(random);










