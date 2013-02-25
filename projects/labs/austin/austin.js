function equal() {
	var num1=prompt("Enter a number...");
	var num2=prompt("Enter another number...");
	if (num1===num2) {
		showNotify("Those numbers are equal!","rgba(0, 230, 0, 0.95)");
	} else {
		showNotify("Those numbers arn't equal!");
	};
};