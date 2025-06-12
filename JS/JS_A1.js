Array.prototype.includesOneOf = function(elements) {
    if (this.length === 0 || elements.length === 0) return false;

    return elements.some(element => 
        this.some(item => 
            JSON.stringify(item) === JSON.stringify(element)
        )
    );
};

let arr = [1,2,3,4,5,6];
console.log(arr.includesOneOf([2,8,10]));
console.log(arr.includesOneOf([10,11,12]));

const arr2 = [{name:'James Bond',code:'OO7'}, {name:"Edward Donne",code:"OO1"}];
console.log(arr2.includesOneOf([{name:"James Bond", code:'OO7'}]));
console.log(arr2.includesOneOf([{name:"James Bond", code:'OO7', organization: 'MI6'}]));

const arr3 = [[1,22,33,4],[4,55,6,772]];
console.log(arr3.includesOneOf([[1,22,33,4]]));
console.log(arr3.includesOneOf([[1,33,22,4]]));
