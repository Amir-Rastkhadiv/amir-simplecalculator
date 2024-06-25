// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
// Select the input fields and result paragraph
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultParagraph = document.getElementById('result');

// Define functions for each arithmetic operation
    function add() {
    const result = parseFloat(num1.value) + parseFloat(num2.value);
    resultParagraph.textContent = 'Result: ' + result;
    }

    function subtract() {
    const result = parseFloat(num1.value) - parseFloat(num2.value);
    resultParagraph.textContent = 'Result: ' + result;
    }
  
    function multiply() {
    const result = parseFloat(num1.value) * parseFloat(num2.value);
    resultParagraph.textContent = 'Result: ' + result;
    }
  
    function divide() {
      if (parseFloat(num2.value) === 0) {
        resultParagraph.textContent = 'Result: Cannot divide by zero';
      } else {
        const result = parseFloat(num1.value) / parseFloat(num2.value);
        resultParagraph.textContent = 'Result: ' + result;
    }
};

// Add event listeners to the buttons
document.getElementById('addButton').addEventListener('click', add);
document.getElementById('subtractButton').addEventListener('click', subtract);
document.getElementById('multiplyButton').addEventListener('click', multiply);
document.getElementById('divideButton').addEventListener('click', divide);
});