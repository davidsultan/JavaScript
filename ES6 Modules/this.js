
// this always returns a reference to a current object



/*
const person = {

    name: "Soner",
    walk() {
        console.log(this);
    }
}

person.walk();


//const walk = person.walk;
//walk();

const walk = person.walk.bind(person);// this binding
walk();


const person = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log("self", self);
        }, 1000);
    }
}

person.talk();
*/

// with arrow function

const person = {
    talk() {
        var self = this;
        setTimeout(() => {
            console.log("self", self);
        }, 1000);
    }// arrow functions don't rebind this
}

person.talk();
