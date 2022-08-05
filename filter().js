// filter(): Returns the elements of an array that meets
//                 the condition specified in a function.

let students = [15,16,17,18,19];

function checkAge(age){
    if(age>=18){
        return age;
    }
}

let adultStudents = students.filter(checkAge);

console.log(adultStudents);