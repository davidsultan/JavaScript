// document.getElementById("myTitle");
// document.getElementsByName("fruits");
// document.getElementsByTagName("li");
// document.getElementsByClassName("desserts");
// document.querySelector("#myTitle");
// document.querySelectorAll("li");

/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";


let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";


let desserts = document.getElementsByClassName("desserts");
vegetables[2].style.backgroundColor = "lightgreen";


//let element = document.querySelector("#myTitle");
//let element = document.querySelector(".desserts");
//let element = document.querySelector("li");
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})