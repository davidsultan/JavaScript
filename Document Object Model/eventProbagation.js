// Event Probagation

// 1. Event Capturing -> true
// 2. Target
// 3. Event Bubbling  -> false

window.addEventListener('click', function(){
    console.log("Window");
}, true);

document.addEventListener('click', function(){
    console.log("Document");
}, true);

document.querySelector('.div2').addEventListener('click', function(e){
    
    //e.stopPropagation();
    console.log("DIV2");
}, true);//{once: true}

document.querySelector('.div1').addEventListener('click', function(){
    console.log("DIV1");
}, true);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e.target = "clicked!");
}, true);

