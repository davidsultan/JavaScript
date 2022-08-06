//          "I promise to return something in future! :p"

// promise: An object that encapsulates the result of an
//          asynchronous operation.
//          Let asynchronous methods return something values
//          like synchronous methods.

//          The state is 'pending' then: 'fullfilled' or 'rejected'
//          The result is what can be returned
//          2 parts producing and consuming.

/*
const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded")
    }
    else{
        reject("File NOT loaded")
    }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));


const promise = new Promise(resolve => {
    setTimeout(resolve, 5000);
});

promise.then(() => console.log("What r ya waiting for?"));
*/

const wait  = time  => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("What r ya waiting for?"));