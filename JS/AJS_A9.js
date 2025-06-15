const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1,2,3,4,5];
const student = {name: "Nikhil", age: 23, course: "MCA"};


let fruitsToUpperCase = fruits.map(fruit => {
    return fruit.toUpperCase();
});
console.log(fruitsToUpperCase);

let getEvenNumber = numbers.filter(num => {
    return num % 2 == 0;
});
console.log(getEvenNumber);

let sum = numbers.reduce((num, total) =>{
    return total += num;
});
console.log("Sum of all array element is " + sum);


let {name, age, ...rest} = student;
console.log(name);
console.log(age);
console.log(rest);


let mixedArray = [...fruits,  ...numbers];
console.log(mixedArray);
