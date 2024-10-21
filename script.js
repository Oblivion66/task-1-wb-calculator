"use strict";
const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
const power = (a, b) => Math.pow(a, b);
const sqrt = (a) => Math.sqrt(a);
const abs = (a) => Math.abs(a);
const negate = (a) => -a;
let a = 0x65; // hex
let b = 42; // decimal
let c = 0b1011; // binary
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
