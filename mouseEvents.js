// mouse events
// element.addEventListener(type, function);

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.alignItems = "center";
div.style.justifyContent = "center";

/*
div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "orange";
})

div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu!");
})
div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})


console.log(div.style);
*/
div.innerText = "!";
div.style.fontSize = "90px";
div.style.color = "yellow";

div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "transparent";
    div.innerText = "Hey!!!\nRespect privacy!";
    div.style.fontSize = "30px";
    div.style.color = "red";
})
div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
    div.innerText = "!";
    div.style.fontSize = "90px";
    div.style.color = "yellow";
})

