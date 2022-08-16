// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function);

const button2 = document.querySelector(".btn-2");

function alertBtn(){
    alert("Life sucks, right?");
}

button2.addEventListener("click", alertBtn);

// Mouseover

const newBgColor = document.querySelector('.box-3');

function changeBgColor(){
    newBgColor.style.backgroundColor = 'green';
}
newBgColor.addEventListener("mouseover", changeBgColor);