const display = document.querySelector('.top');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const plusMinus = document.getElementById('plus-minus');
var numHolder = '';
var calcHolder = [];
var result;
var operatorHolder = '';

function userInput(num) {
  numHolder += num;
  console.log(numHolder);
}

function calculate(operator) {
  numHolder = Number(numHolder);
  calcHolder.push(numHolder);

  if (operator == 'add') {
    addition();
  } else if (operator == 'subtract') {
    subtraction();
  } else if (operator == 'multiply') {
    multiplication();
  } else if (operator == 'divide') {
    division();
  } else {
    calcEqual();
  }
}

function addition() {
  result = calcHolder.reduce((acc, cur) => acc + cur);
  numHolder = '';
  console.log(result);
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'add';
}

function subtraction() {
  result = calcHolder.reduce((acc, cur) => acc - cur);
  numHolder = '';
  console.log(result);
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'subtract';
}

function multiplication() {
  result = calcHolder.reduce((acc, cur) => acc * cur);
  numHolder = '';
  console.log(result);
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'multiply';
}

function division() {
  result = calcHolder.reduce((acc, cur) => acc / cur);
  numHolder = '';
  console.log(result);
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'divide';
}

function calcEqual() {
  calcHolder.pop();
  calculate(operatorHolder);
  operatorHolder = '';
  numHolder = '';
  calcHolder = [];
  result = 0;
}

function main() {
  one.addEventListener('click', () => userInput('1'));
  two.addEventListener('click', () => userInput('2'));
  three.addEventListener('click', () => userInput('3'));
  four.addEventListener('click', () => userInput('4'));
  five.addEventListener('click', () => userInput('5'));
  six.addEventListener('click', () => userInput('6'));
  seven.addEventListener('click', () => userInput('7'));
  eight.addEventListener('click', () => userInput('8'));
  nine.addEventListener('click', () => userInput('9'));
  zero.addEventListener('click', () => userInput('0'));

  clear.addEventListener('click', () => userInput('clear'));
  del.addEventListener('click', () => userInput('del'));
  plusMinus.addEventListener('click', () => userInput('negate'));

  equal.addEventListener('click', () => calculate('equal'));
  add.addEventListener('click', () => calculate('add'));
  subtract.addEventListener('click', () => calculate('subtract'));
  multiply.addEventListener('click', () => calculate('multiply'));
  divide.addEventListener('click', () => calculate('divide'));
}

main();
