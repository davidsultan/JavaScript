// class: A "blueprint" for making objects.
//        Defines properties and/or methods.

// constructor: A special method for assigning properties.
//              Automatically called when creating an object.

class Car{

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("You drive the ", this.model);
    }
    drive(){
        console.log("You step on the brakes!");
    }
    whatIsThis(){
        return this;
    }
}

let car1 = new Car("Hanomag","Brilliant", 1974, "red");
let car2 = new Car("Fiat","Doblo", 2010, "white");

console.log(car1.make);
console.log(car1.year);

console.log(car1.whatIsThis());