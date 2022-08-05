let letters = ["H", "E", "L", "P"];

let car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

for(let i=0; i<letters.length; i++){
    console.log(letters[i]);
}

for(let i in letters){
    console.log(letters[i]);
}

for(let j in car){
    console.log(car[j]);
}

// nested loop: a loop inside of another loop

var symbol = window.prompt("Enter a symbol to use!");
var rows = window.prompt("Enter # of rows!");
var columns = window.prompt("Enter # of columns!");

for(let i=0; i<rows; i++){
    for(let j=0; j<rows; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}








