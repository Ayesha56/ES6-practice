const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square (element){
//     return element * element;
// }

const square = numbers.map(element => element * element);
const result = numbers.map(x => x * x);
const f1big = numbers.filter(x => x > 4);
const f2small = numbers.find(x => x < 8);
console.log(f2small);
console.log(f1big);
console.log(result);

console.log(square);