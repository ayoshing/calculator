const displayValue = document.querySelector('.display-value');
const displayEq = document.querySelector('.display-equation');
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

function commaConverter(input) {
  var arr = input.split('');
  for (i = 0; i < (input.length/3); i++) {
    arr.splice()
  }
}

function userInput(num) {
  if (num == 'clear') {
    clearInput();
  } else if (num == 'del') {
    backspace();
  } else if (num == 'negate') {
    negate();
  } else if (num == 'dot') {
    dotInput();
  } else {
    numHolder += num;
    displayValue.textContent = numHolder;
  }
}

function clearInput() {
  numHolder = '';
  calcHolder = [];
  operatorHolder = '';
  result = 0;
  displayValue.textContent = '|';
}

function backspace() {
  var numHolderArray = numHolder.split('');
  numHolderArray.pop();
  numHolder = numHolderArray.join('');
  displayValue.textContent = numHolder;
}

function negate() {
  var numHolderArray = numHolder.split('');
  numHolderArray.unshift('-');
  numHolder = numHolderArray.join('');
  displayValue.textContent = numHolder;
}

function dotInput() {
  var numHolderArray = numHolder.split('');
  numHolderArray.push('.');
  numHolder = numHolderArray.join('');
  displayValue.textContent = numHolder;
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
  calcHolder = [];
  displayValue.textContent = result;
  calcHolder.push(result);
  operatorHolder = 'add';
}

function subtraction() {
  result = calcHolder.reduce((acc, cur) => acc - cur);
  numHolder = '';
  displayValue.textContent = result;
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'subtract';
}

function multiplication() {
  result = calcHolder.reduce((acc, cur) => acc * cur);
  numHolder = '';
  displayValue.textContent = result;
  calcHolder = [];
  calcHolder.push(result);
  operatorHolder = 'multiply';
}

function division() {
  result = calcHolder.reduce((acc, cur) => acc / cur);
  numHolder = '';
  displayValue.textContent = result;
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
  plusMinus.addEventListener('click', () => userInput('negate'));
  clear.addEventListener('click', () => userInput('clear'));
  del.addEventListener('click', () => userInput('del'));
  dot.addEventListener('click', () => userInput('dot'));
  equal.addEventListener('click', () => calculate('equal'));
  add.addEventListener('click', () => calculate('add'));
  subtract.addEventListener('click', () => calculate('subtract'));
  multiply.addEventListener('click', () => calculate('multiply'));
  divide.addEventListener('click', () => calculate('divide'));
}

main();
