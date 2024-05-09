// Function to handle calculate button click
function handleCalculateClick() {
    let incomeInput = document.getElementById('incomeInput');
    let expenseInput = document.getElementById('expenseInput');
    let resultElement = document.getElementById('result');

    let income = parseFloat(incomeInput.value);
    let expense = parseFloat(expenseInput.value);

    if (isNaN(income) || isNaN(expense)) {
        alert('Please enter valid numbers');
        return;
    }

    let savings = income - expense;

    resultElement.innerHTML = `Income: $${income}<br>Expense: $${expense}<br>Savings: $${savings}`;
}

// Add event listener to the calculate button
let calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', handleCalculateClick);
