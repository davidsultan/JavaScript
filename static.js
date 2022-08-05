// static = A method or property that belongs to a class,not any one object.
//          It can be reached by Class name not by objects.

class Car{
    static numberOfCars = 0;

    static beginRace(){
        console.log("The race has begun!");
    }

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Hanomag");
let car2 = new Car("Togg");

console.log(Car.numberOfCars);
car1.beginRace();// csnnot be resched by an object!