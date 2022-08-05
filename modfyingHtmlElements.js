// modify HTML elements
// document.getElementById() -> older way
// document.querySelector() -> newer, more powerful

document.querySelector("#myB").onclick = function(){

    const h1 = document.querySelector("#myH1");
    h1.innerText = "Bye World!"

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "Don't Touch Me";
    p.forEach(element => element.innerText = "Don't Touch Me");

    const buttons = document.querySelectorAll("button");
    //buttons[0].remove();
    buttons.forEach(element => element.remove());
}