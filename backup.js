function add(num1, num2 = 20) {
    //num2 = num2 || 20
    return num1 + num2;
}
const total = add(4, 5);
console.log(total);