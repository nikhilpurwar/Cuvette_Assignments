const numbers = [1, 2, 3, 4, 5];
console.log("Original Array : " + numbers);
let result = numbers.map(num =>{
    return num * 2;
});
console.log("Doubled Array : " + result);
