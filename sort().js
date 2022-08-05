let numbers = [3, 14, 1, 2, 5];

// numbers.sort();// ASCII character order by default

numbers.sort(function(x,y){
    return x - y;// to sort numerically, we use function.
});              // x-y  for ascending, y-x is for descending order.

// with arrow function;
numbers.sort((x,y) => y-x);
console.log(numbers);
