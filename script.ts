const sum = (a: number, b: number) => a + b;
const substract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
const modulo = (a: number, b: number) => a % b;
const power = (a: number, b: number) => Math.pow(a, b);
const sqrt = (a: number) => Math.sqrt(a);
const abs = (a: number) => Math.abs(a);
const negate = (a: number) => -a;

let a: number = 0x65; // hex
let b: number = 42; // decimal
let c: number = 0b1011; // binary

// Работает со всеми системами счисления
console.log(sum(a, b));
console.log(substract(a, c));
console.log(multiply(a, c));
console.log(divide(a, b));
console.log(modulo(a, b));
console.log(power(a, b));
console.log(sqrt(a));
console.log(abs(a));
console.log(negate(c));