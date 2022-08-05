/*
var myName = 
window.prompt("What's your name?");

console.log("Hello!", myName); */

// 2nd Way to Get User Input

document.getElementById("myButton").onclick=function(){
    var myName = document.getElementById("myText").value;
    console.log(myName);
}