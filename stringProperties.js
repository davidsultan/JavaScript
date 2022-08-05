// useful string properties & methods

var myName = "Soner The King";
var myStreet = "123 Fake Street";
var myCity = "Bayburt 69500";
var myPhone = "123-456-7890";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("e"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(myName.lastIndexOf(" ")+1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-", "");
console.log(myPhone);