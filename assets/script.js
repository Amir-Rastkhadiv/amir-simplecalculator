let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
currentInput += number;
updateDisplay(currentInput);
}

function clearDisplay() {
currentInput = '';
previousInput = '';
operator = '';
updateDisplay('0');
}

function updateDisplay(value) {
document.getElementById('num1').value = value;
}

function setOperator(op) {
if (currentInput === '') return;
if (previousInput !== '') {
calculateResult();
}
operator = op;
previousInput = currentInput;
currentInput = '';
}

function calculateResult() {
if (currentInput === '' || previousInput === '' || operator === '') return;

let result;
const prev = parseFloat(previousInput);
const current = parseFloat(currentInput);

switch (operator) {
case '+':
result = prev + current;
break;
case '-':
result = prev - current;
break;
case '×':
result = prev * current;
break;
case '÷':
if (current === 0) {
alert("Cannot divide by zero");
clearDisplay();
return;
}
result = prev / current;
break;
default:
return;
}

updateDisplay(result);
currentInput = result.toString();
previousInput = '';
operator = '';
}

document.getElementById('addButton').addEventListener('click', () => setOperator('+'));
document.getElementById('subtractButton').addEventListener('click', () => setOperator('-'));
document.getElementById('multiplyButton').addEventListener('click', () => setOperator('×'));
document.getElementById('divideButton').addEventListener('click', () => setOperator('÷'));