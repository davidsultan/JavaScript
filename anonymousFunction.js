// anonymous function: Function w/o a name.
//                     Often not accessible after its
//                     initial creation.

// benefits:     Doesn't clutter global namespace.
//               Usable once.
//               Can be passedd as arguments.

//***************************************** */
// IIFE: a js function that runs as soon as defined.
// grouping operator = ()

(function(){

    document.getElementById("myH1").innerHTML = "Hey!";
})();

// setTimeout(function, miliseconds);

/*
let task = function(){
    document.getElementById("myH1").innerHTML = "sup?";
}

setTimeout(task, 1000);*/

setTimeout(function(){
    document.getElementById("myH1").innerHTML = "sup?";
}, 1000);