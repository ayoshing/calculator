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
var input1 = '';
var input2 = '';

function numInput(input) {
  input1 += input;
  console.log(input1);
}

function opInput(operator) {
  if (operator == 'add') {
    Number(input1);
    input2 = input1;
    input1 = '';
    console.log(input1);
    console.log(input2);
  }
}

function calculate() {
  one.addEventListener('click', () => numInput('1'));
  two.addEventListener('click', () => numInput('2'));
  three.addEventListener('click', () => numInput('3'));
  four.addEventListener('click', () => numInput('4'));
  five.addEventListener('click', () => numInput('5'));
  six.addEventListener('click', () => numInput('6'));
  seven.addEventListener('click', () => numInput('7'));
  eight.addEventListener('click', () => numInput('8'));
  nine.addEventListener('click', () => numInput('9'));
  zero.addEventListener('click', () => numInput('0'));
  add.addEventListener('click', () => opInput('add'));
  subtract.addEventListener('click', () => opInput('subtract'));
  multiply.addEventListener('click', () => opInput('multiply'));
  divide.addEventListener('click', () => opInput('divide'));
  plusMinus.addEventListener('click', () => calculate);
  clear.addEventListener('click', () => opInput('clear'));
  del.addEventListener('click', () => opInput('del'));
  equal.addEventListener('click', () => opInput('equal'));
}

calculate();
