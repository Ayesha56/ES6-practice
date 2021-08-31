//---function declaration---
// function DoubleIt(num) {
//     return num * 2;
// }
//----function expression with variable--
// const DoubleIt = function(num) {
//     return num * 2;
// }
//--ES6-- do this function
//num ==is paramiter and => return man diyese
const DoubleIt = (num) => num * 2; //single para
const add = (x, y) => x + y; //multi para
const give5 = () => 5; //empty para
const DoMath = (x, y) => { //multi line{} use hobe//
    const sum = x + y;
    const diff = x - y;
    const mul = sum * diff;
    return mul;
}
const result3 = DoMath(9, 5);
console.log(result3);
const result2 = give5();
console.log(result2);
const total = add(4, 7);
console.log(total);
const result = DoubleIt(5);
console.log(result);