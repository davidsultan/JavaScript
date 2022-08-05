const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

/*
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x++;
            y++;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
        }
    }
}
*/
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees += 5;
            x++;
            y++;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

/*
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let scaleX = 0;
    let scaleY = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 3){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            x += 2;
            y++;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";

        }
    }
}*/