// Canvas API: a means for drawing graphics.
//             Used for animations, games, data visualizations...

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
context.strokeStyle = "purple";
context.lineWidth = 10;

context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.moveTo(500,0);
context.lineTo(250,250);
context.moveTo(250,250);
context.lineTo(250,500);
context.stroke();
*/
/******************* TRIANGLE *****************
context.strokeStyle = "grey";
context.fillStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);
context.stroke();
context.fill();*/

/******************* RECTANGLE ******************/
//starting point, 	      , width, height
//(      0      ,      0      , 250  , 250   )
context.fillStyle = "skyblue";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "orange";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "purple";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);

/******************* CIRCLE ******************/
//(centerx ,centery  ,radius, sAngle, eAngle, c.clockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();//        360 degrees
context.arc(250, 250, 200, 0, 2*Math.PI, true);
context.stroke();
context.fill();

/******************* TEXT ******************/
context.font = "50px MV Boli";
context.fillStyle = "white";
context.fillText("I WIN!", 150, 190);
// to center the text;

context.fillStyle = "darkblue";
context.textAlign = "center";
context.fillText("I WIN!", canvas.width/2, canvas.height/2);


