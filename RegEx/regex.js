


// let myStr = "Hello world!";
// let regex = /hello/i;
// let isExisting = regex.test(myStr);
// console.log(isExisting);




// let petStr = "Soner doesn't have a cat!";
// let petRegex = /dog|bird|cat/;
// let test2 = petRegex.test(petStr);
// console.log(test2);




// let twinkleStar = "Twinkle twinkle little star!";
// let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex);
// console.log(result);




// let humStr = "I will hum a song!";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// humStr.match(huRegex); // Returns ["hum"]
// hugStr.match(huRegex); // Returns ["hug"]

// let str = "Let's have fun with fun bun!";
// let unRegex = /.un/g;
// let result2 = str.match(unRegex); // Returns [ 'fun', 'fun', 'bun' ]
// console.log(result2);






// let str2 = "Hun fun bun! fan ban";
// let Regex2 = /f[ua]n/ig;
// let result3 = str2.match(Regex2); // Returns [ 'fun', 'fan' ]
// console.log(result3);






// // "^" Carrot Character
// let str3 = "3 blind mice and tayip";
// let Regex3 = /[^2-9aeiou]/ig;
// let result4 = str3.match(Regex3);
// console.log(result4);

// let text1 = "Soner is the king!";
// let text2 = "is the king!";
// let carrotRegex = /^Soner/;
// carrotRegex.test(text1); // Returns true since it starts with "Soner"
// carrotRegex.test(text2); // Returns false





// // "+" Character - One or more occurances!
// let str3 = "Mississippi";
// let Regex3 = /s+/g;
// let result4 = str3.match(Regex3);
// console.log(result4);





// // "*" Character - Zero or more occurances!
// let scoreWord = "goooooooooooooooaaaaaallllll!!!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// scoreWord.match(goRegex); // Returns [ 'gooooooooooooooo' ]
// gPhrase.match(goRegex); // Returns [ 'g' ]
// oPhrase.match(goRegex); // Returns null
// console.log(result4);





// // GREEDY AND LAZY MATCH
// // Regex matches greedy by default.
// let str = "titanic";
// let greedy = /t[a-z]*i/;
// let lazy = /t[a-z]*?i/; 
// str.match(greedy); // greedy match -> Returns [ 'titani' ]
// str.match(lazy); // lazy match -> Returns [ 'ti' ]

// let text = "<h1>Soner is the king!</h1>";
// let myGreedyRegex = /<.*>/;
// let myLazyRegex = /<.*?>/;




// // CARROT AND DOLLAR
// let text1 = "Soner is the king!";
// let text2 = "is the king!";
// let carrotRegex = /^Soner/;
// carrotRegex.test(text1); // Returns true since it starts with "Soner"
// carrotRegex.test(text2); // Returns false

// let text3 = "Soner is the king!";
// let text4 = "Soner is a baby!";
// let dollarRegex = /king!$/;
// carrotRegex.test(text3); // Returns true since it ends with "king!"
// carrotRegex.test(text4); // Returns false





// // \w -> short way to check a to z letters, 0 to 9 numbers and _
// let text = "There are a to z letters, 0 to 9 numbers and _ here only! */<";
// let regex = /\w/g;
// let result = text.match(regex);
// console.log(result);

// // \W -> Returns the elements NOT letters, numbers or underscore!
// let text2 = "There are a to z letters, 0 to 9 numbers and _ here only! */<";
// let regex2 = /\W/g; // Uppercase W
// let result2 = text2.match(regex2);
// console.log(result2);




// // \d -> Match only numbers!
// let text2 = "Samsung S9 is 150 Turkish Liras!";
// let regex2 = /\d/g;
// let result2 = text2.match(regex2);
// console.log(result2);





// // \D -> Match non-numbers!
// let text2 = "Samsung S9 is 150 Turkish Liras!";
// let regex2 = /\D/g;
// let result2 = text2.match(regex2);
// console.log(result2);





// // \s -> Match white spaces!
// let text2 = "Samsung S9 150 Türk Lirası!";
// let regex2 = /\s/g;
// let result2 = text2.match(regex2);
// console.log(result2);





// // \S -> Match non-white spaces!
// let text2 = "Samsung S9 150 Türk Lirası!";
// let regex2 = /\S/g;
// let result2 = text2.match(regex2);
// console.log(result2);





// // Quantity specifier
// let text2 = "Ohhh no!";
// let regex2 = /Oh{3,6} no/g;
// let result2 = text2.match(regex2);
// console.log(result2);






// // Quantity specifier
// let text2 = "Hazzzzzzzzzzzzzaaahhhh!";
// let regex2 = /z{4,}/g;
// let result2 = text2.match(regex2);
// console.log(result2);






// // Quantity specifier
// let text2 = "Timmmmber";
// let regex2 = /Tim{4}ber/;
// let result2 = text2.match(regex2);
// console.log(result2);





// // All or none - optionel
// let text2 = "Favourite";
// let regex2 = /Favou?rite/; // "u" is optionel!
// let result2 = text2.match(regex2);
// console.log(result2);





// // LOOK AHEAD
// let quit = "qu";
// let noQuit = "qt";
// let quRegex = /q(?=u)/; // positive loook ahead
// let qRegex = /q(?!u)/; // negative loook ahead
// quit.match(quRegex); // Returns [ "q" ]
// noQuit.match(qRegex); // Returns [ "q" ]

// let sampleWord = "Astronaut";
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
// let result = pwRegex.test(sampleWord);







// // Repeating the groups
// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/; 
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns [ "regex regex", "regex" ]

// let repeatNum = "42 42 42";
// let pwRegex = /^(\d+)\s\1\s\1$/;
// let result = pwRegex.test(repeatNum);





// // Replace
// let str = "Soner is a king!".replace(/king!$/, "baby!");
// console.log(str);

// let str2 = "Soner panda".replace(/(\w+)\s(\w+)/, '$2 $1');
// console.log(str2);





// // Remove the white spaces at the beginning and at the end with regex!
// let str = "         Soner            ";
// console.log(str);
// str = str.replace( /^\s+|\s+$/g, "");
// // str = str.replace( /^(\s+)|(\s+)$/g, ""); // same as the line above
// console.log(str);
