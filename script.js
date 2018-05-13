const displayValue = document.querySelector('.display-value');
const displayResult = document.querySelector('.display-result');
const buttons = document.querySelectorAll('.btn');
const btn = buttons.forEach(btn => btn.addEventListener('click', handleBtnClicked));

let btnStored = [];

function handleBtnClicked(e) {
  let equation;
  if (this.dataset.key === 'equal') {
    equation = btnStored.join('');
    console.log(eval(equation));
    displayValue.innerHTML = answer;
  } else if (this.dataset.key === 'delete') {
    btnStored.pop();
    equation = btnStored.join('');
    console.log(btnStored);
    displayValue.innerHTML = equation;
  } else if (this.dataset.key === 'clear') {
    btnStored = [];
    displayValue.innerHTML = 0;
    displayResult.innerHTML = 0;
  } else if (this.classList[1] === 'operator') {
    btnStored.push(this.dataset.key);
    equation = btnStored.join('');
    console.log(btnStored);
    console.log(answer);
    displayResult.innerHTML = answer;
    displayValue.innerHTML = equation;
  } else {
    btnStored.push(this.dataset.key);
    equation = btnStored.join('');
    answer = eval(equation);
    console.log(btnStored);
    console.log(answer);
    displayResult.innerHTML = answer;
    displayValue.innerHTML = equation;
  }
}
