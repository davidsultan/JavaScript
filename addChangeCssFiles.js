// add/change CSS properties

document.querySelector("#myB").onclick = function(){

    const h1 = document.querySelector("#myH1");

    console.log(h1.style);

    h1.style.color = "#00ff00";
    h1.style.backgroundColor = "black";
    h1.style.fontFamily = "consolas";
    h1.style.fontSize = "75px";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    h1.style.borderColor = "#00ff00";

}