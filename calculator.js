let num1 = 0;
let num2 = 0;
let option = "";

option = prompt(`Pick operation: +, -, *, /`);
num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));

if (option == "+") {
	alert(num1 + num2);
} else if (option == "-") {
	alert(num1 - num2);
} else if (option == "*") {
	alert(num1 * num2);
} else {
	alert(num1 / num2);
}
