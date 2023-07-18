// Create a calculator that can perform the simple operations +,-,*,/ with rational numbers.
// Calculator can take in multiple numbers and perform order of operations.

// document.querySelectorAll('.Buttons button') selects all the buttons inside the element 
// with the class Buttons. The buttons are retrieved as a NodeList.
const buttons = document.querySelectorAll('.Buttons button');
const answerElement = document.getElementById('screen');

// collect the digits of a number in an array. 
// collect all the numbers inputed. 
// collect all the operators inputed. 
let digits = [];
let numbers =[];
let operators =[];

// forEach is used to attach a click event listener to each button.
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonId = this.id;
    switch (buttonId) {
        case "b0":
            digits.push(0);
            break;
        case "b1":
            digits.push(1);
            break;
        case "b2":
            digits.push(2);
            break;
        case "b3":
            digits.push(3);
            break;
        case "b4":
            digits.push(4);
            break;
        case "b5":
            digits.push(5);
            break;
        case "b6":
            digits.push(6);
            break;
        case "b7":
            digits.push(7);
            break;
        case "b8":
            digits.push(8);
            break;
        case "b9":
            digits.push(9);
            break;
        case "add":
            const combinedNumber = parseInt(digits.join(''));
            numbers.push(combinedNumber);
            operators.push("+");
            digits = [];
            break;
        case "sub":
            const combinedNumber2 = parseInt(digits.join(''));
            numbers.push(combinedNumber2);
            operators.push("-");
            digits = [];
            break;
        case "mul":
            const combinedNumber3 = parseInt(digits.join(''));
            numbers.push(combinedNumber3);
            operators.push("*");
            digits = [];
            break;
        case "div":
            const combinedNumber4 = parseInt(digits.join(''));
            numbers.push(combinedNumber4);
            operators.push("/");
            digits = [];
            break;

        case "eq":
            const combinedNumber5 = parseInt(digits.join(''));
            numbers.push(combinedNumber5);
            digits = [];
            console.log("perform operations");
            console.log(numbers);
         
            // Perform operations * and / first. And then + and -.

            while (operators.length > 0) {

                operators.forEach(function(operation, index, operators) {

                    if (operation === "*" || operation === "/") {
                        if (operation === "*") {
                            const tmp = numbers[index]*numbers[index+1];
                            numbers[index] = tmp;
                            operators.splice(index, 1);
                            numbers.splice(index+1, 1);

                        } else {
                            const tmp2 = numbers[index]/numbers[index+1];
                            numbers[index] = tmp2;
                            operators.splice(index, 1);
                            numbers.splice(index+1, 1);
                        }

                    }
                    console.log(numbers);
                    console.log(operators);

                });

                operators.forEach(function(operation, index, operators) {

                    if (operation === "-" || operation === "+") {
                        if (operation === "-") {
                            const tmp = numbers[index]-numbers[index+1];
                            numbers[index] = tmp;
                            operators.splice(index, 1);
                            numbers.splice(index+1, 1);

                        } else {
                            const tmp2 = numbers[index]+numbers[index+1];
                            numbers[index] = tmp2;
                            operators.splice(index, 1);
                            numbers.splice(index+1, 1);
                        }

                    }
                    console.log(numbers);
                    console.log(operators);

                });


            }
            let answer = numbers[0];
            // remove answer from array for next calculation.
            numbers.shift();
            // set screen answer to answer
            answerElement.textContent = answer;
        }
        

        console.log(digits);
        console.log(numbers);
        console.log(operators);
    });
});


