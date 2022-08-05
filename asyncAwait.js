// async = makes a function return a Promise
// await = makes a function wait for a Promise


/*
async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}
async function display(){
    document.getElementById("myH1").innerHTML = await loadFile();
}// needs to be in a async function.
display();*/

/***************** Second way *****************/

async function loadFile(){

    const promise = new Promise((resolve, reject) => {
        let fileLoaded = false;

        if(fileLoaded){
            resolve("File loaded");
        }
        else{
            reject("File NOT loaded");
        }
    });

    try{
        document.getElementById("myH1").innerHTML = await promise;
    }
    catch(error){
        document.getElementById("myH1").innerHTML = error;
    }
}
loadFile();