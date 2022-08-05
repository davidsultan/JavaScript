// object = a container for proporties, methods.

var human = {
    name: "Rick",
    age: 65,

    read: function(){
        console.log("Rick is reading a holy book!")
    },
    eat: function(){
        console.log("Rick is drinking zem zem suyu. :d")
    },
    help: function(){
        console.log("Rick is helping to peeople.")
    }
};

human.name //dot notation
human['name'] //bracket notation

console.log(human.name);
human.eat();