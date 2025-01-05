// Initialize variables for current input, previous input, and operator
let currentInput = '';
let previousInput = '';
let operator = '';

// Add event listeners to all buttons
document.querySelectorAll('.calc_button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value >= '0' && value <= '9' || value === '.') {
            // If a number or decimal button is clicked
            // Append the value to the current input
            currentInput += value;
            // Update the display with the current input
            updateDisplay(currentInput);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            // If an operator button is clicked
            // Store the current input as previous input
            previousInput = currentInput;
            // Store the operator
            operator = value;
            // Reset the current input
            currentInput = '';
            // Update the display with the operator
            updateDisplay(operator);
        } else if (value === '=') {
            // If the equal button is clicked
            // Perform the calculation using previous input, current input, and operator
            currentInput = calculate(previousInput, currentInput, operator);
            // Update the display with the result
            updateDisplay(currentInput);
            // Reset previous input and operator
            previousInput = '';
            operator = '';
        } else if (value === 'C') {
            // If the clear button is clicked
            // Reset current input, previous input, and operator
            currentInput = '';
            previousInput = '';
            operator = '';
            // Update the display to show '0'
            updateDisplay('0');
        }
    });
});

// Function to update the display with a given value
function updateDisplay(value) {
    document.getElementById('output').value = value;
}

// Function to perform the calculation based on previous input, current input, and operator
function calculate(previous, current, operator) {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);

    if (isNaN(prev) || isNaN(curr)) return '';

    switch (operator) {
        case '+':
            return (prev + curr).toString();
        case '-':
            return (prev - curr).toString();
        case '*':
            return (prev * curr).toString();
        case '/':
            return (prev / curr).toString();
        default:
            return '';
    }
}













