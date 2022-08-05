// DOM: Document Object Model: 
//      Technically, it is an API(Application Programming Interface)
//      An interface for changing the content of a page.


console.log(document);
console.dir(document);

console.log(document.title);
console.log(document.URL);

document.title = "Title goes here!";
//document.location = "https://www.google.com";

document.body.style.backgroundColor = "skyblue";
document.getElementById("myDiv").innerHTML = "Hello";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nexttElementSibling
// .children[]
// .firstElementChild
// Array.from(.children)