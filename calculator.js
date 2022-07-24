const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let numberInput = "";
let operator = null;
let firstNumber = null;
let secondNumber = null;
let savedOperator = null;

numbers.forEach(number => {
    number.addEventListener('click', function numberClick(event) {
        numberInput += event.target.value;

        showOnDisplay(numberInput);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', function (event) {
        operator = event.target.id;

        console.log(event);

        if (operator === "equals") {
            secondNumber = Number(numberInput);

            let result = null;

            switch (savedOperator) {
                case 'plus':
                    result = add(firstNumber, secondNumber);
                    break;
                case 'minus':
                    result = subtract(firstNumber, secondNumber);
                    break;
                case 'multiply':
                    result = multiply(firstNumber, secondNumber);
                    break;
                case 'divide':
                    result = divide(firstNumber, secondNumber);
                    break;
                default:
                    break;
            }

            showOnDisplay(result);
            firstNumber = result;

            console.log("result: " + result);
            console.log("first2: " + firstNumber);


        } else if (operator === "clear") {
            firstNumber = null;
            secondNumber = null;
            numberInput = "";
            operator = null;
            result = null;
            savedOperator = null;

            showOnDisplay(numberInput);

        } else {
            if (firstNumber != null && secondNumber === null) {
                secondNumber = Number(numberInput);
            } else if (firstNumber != null && secondNumber != null) {
                firstNumber = result;
                secondNumber = Number(numberInput);
            } else {
                firstNumber = Number(numberInput);
            }

            numberInput = "";
            savedOperator = operator;

            showOnDisplay(numberInput);
        }
    })
})

function showOnDisplay(number) {
    document.getElementById("display").innerHTML = number;
}

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}